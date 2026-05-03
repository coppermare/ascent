"use client";

import type { GrainGradientShape } from "@paper-design/shaders";
import {
  GrainGradient,
  grainGradientPresets,
} from "@paper-design/shaders-react";
import { toBlob } from "html-to-image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Button } from "@/components/Button";

const PREVIEW_PX = 400;
const DEFAULT_MASK_URL = "/ascent-symbol-mask.svg";
const SHAPES: GrainGradientShape[] = [
  "wave",
  "dots",
  "truchet",
  "corners",
  "ripple",
  "blob",
  "sphere",
];

const FITS = ["none", "contain", "cover"] as const;
type ShaderFitChoice = (typeof FITS)[number];

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not decode image."));
    img.src = url;
  });
}

function toLuminanceMaskCanvas(img: HTMLImageElement): HTMLCanvasElement {
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  if (!ctx) return c;
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, w, h);
  const d = data.data;
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i] ?? 0;
    const g = d[i + 1] ?? 0;
    const b = d[i + 2] ?? 0;
    const a = d[i + 3] ?? 255;
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    d[i] = 255;
    d[i + 1] = 255;
    d[i + 2] = 255;
    d[i + 3] = Math.round((a / 255) * lum);
  }
  ctx.putImageData(data, 0, 0);
  return c;
}

function escapeAttr(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function revokeObjectUrl(url: string | null) {
  if (url?.startsWith("blob:")) URL.revokeObjectURL(url);
}

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

export function GrainIconTool() {
  const maskId = useId();
  const shaderWrapRef = useRef<HTMLDivElement | null>(null);
  /** Full preview card for raster export */
  const previewExportRef = useRef<HTMLDivElement | null>(null);
  const [maskUrl, setMaskUrl] = useState<string | null>(DEFAULT_MASK_URL);
  const maskUrlRef = useRef<string | null>(DEFAULT_MASK_URL);

  const [presetName, setPresetName] = useState("Default");

  /** Distinct defaults: polished flat grain, not the marketing hero shader */
  const [colorBack, setColorBack] = useState("#07101f");
  const [colorA, setColorA] = useState("#075dff");
  const [colorB, setColorB] = useState("#7be7ff");
  const [softness, setSoftness] = useState(0.58);
  const [intensity, setIntensity] = useState(0.74);
  const [noise, setNoise] = useState(0.64);
  const [shape, setShape] = useState<GrainGradientShape>("sphere");
  const [speed, setSpeed] = useState(1);
  const [fit, setFit] = useState<ShaderFitChoice>("contain");
  const [scale, setScale] = useState(1.06);
  const [offsetX, setOffsetX] = useState(0.02);
  const [offsetY, setOffsetY] = useState(-0.04);
  const [rotation, setRotation] = useState(28);
  const [animate, setAnimate] = useState(true);
  const [exportPx, setExportPx] = useState(1024);
  const [status, setStatus] = useState<string>("");
  const [maskMode, setMaskMode] = useState<"alpha" | "luminance">("alpha");
  const [activePanel, setActivePanel] = useState<
    "setup" | "style" | "export" | "advanced"
  >("setup");

  const [grainGlow, setGrainGlow] = useState(0.62);
  const [cursorFlow, setCursorFlow] = useState(0.44);
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0, active: false });

  const effectiveSpeed = animate ? speed : 0;
  const lightX = 50 + pointer.x * 28;
  const lightY = 38 + pointer.y * 22;
  const activeGlow = Math.min(0.95, grainGlow + (pointer.active ? 0.16 : 0));
  const liveOffsetX = offsetX + pointer.x * cursorFlow * 0.32;
  const liveOffsetY = offsetY + pointer.y * cursorFlow * 0.32;
  const liveRotation = rotation + pointer.x * cursorFlow * 18;
  const liveScale = scale + (pointer.active ? cursorFlow * 0.04 : 0);

  useEffect(() => {
    maskUrlRef.current = maskUrl;
  }, [maskUrl]);

  useEffect(
    () => () => {
      const u = maskUrlRef.current;
      revokeObjectUrl(u);
    },
    [],
  );

  const onPreviewPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setPointer({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
        active: true,
      });
    },
    [],
  );

  const resetPreviewPointer = useCallback(() => {
    setPointer({ x: 0, y: 0, active: false });
  }, []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const mime = f.type.toLowerCase();
    if (
      mime !== "image/png" &&
      mime !== "image/svg+xml" &&
      !f.name.toLowerCase().endsWith(".svg") &&
      !f.name.toLowerCase().endsWith(".png")
    ) {
      setStatus("Please choose a PNG or SVG file.");
      e.target.value = "";
      return;
    }
    revokeObjectUrl(maskUrlRef.current);
    const url = URL.createObjectURL(f);
    setMaskUrl(url);
    setPresetName("Custom");
    setStatus("");
    e.target.value = "";
  }, []);

  const clearMask = useCallback(() => {
    revokeObjectUrl(maskUrlRef.current);
    maskUrlRef.current = null;
    setMaskUrl(null);
  }, []);

  const restoreDefaultMask = useCallback(() => {
    revokeObjectUrl(maskUrlRef.current);
    maskUrlRef.current = DEFAULT_MASK_URL;
    setMaskUrl(DEFAULT_MASK_URL);
    setMaskMode("alpha");
    setStatus("");
  }, []);

  const resetDefaultLook = useCallback(() => {
    setPresetName("Default");
    setColorBack("#07101f");
    setColorA("#075dff");
    setColorB("#7be7ff");
    setSoftness(0.58);
    setIntensity(0.74);
    setNoise(0.64);
    setShape("sphere");
    setFit("contain");
    setScale(1.06);
    setOffsetX(0.02);
    setOffsetY(-0.04);
    setRotation(28);
    setAnimate(true);
    setSpeed(1);
    setGrainGlow(0.62);
    setCursorFlow(0.44);
    setStatus("");
  }, []);

  const applyNamedPreset = useCallback((name: string) => {
    const p = grainGradientPresets.find((x) => x.name === name);
    if (!p) return;
    setPresetName(name);
    const params = p.params;
    setColorBack(params.colorBack);
    const cols = params.colors ?? ["#6d62f0", "#e956a8"];
    const c1 = cols[0] ?? "#6d62f0";
    const c2 = cols[1] ?? cols[0] ?? "#e956a8";
    setColorA(typeof c1 === "string" ? c1 : "#6d62f0");
    setColorB(typeof c2 === "string" ? c2 : "#e956a8");
    setSoftness(params.softness ?? 0.5);
    setIntensity(params.intensity ?? 1);
    setNoise(params.noise ?? 0.5);
    if (params.shape) setShape(params.shape as GrainGradientShape);
    setFit(((params.fit as ShaderFitChoice) ?? "none") || "none");
    setScale(typeof params.scale === "number" ? params.scale : 1);
    setOffsetX(typeof params.offsetX === "number" ? params.offsetX : 0);
    setOffsetY(typeof params.offsetY === "number" ? params.offsetY : 0);
    setRotation(typeof params.rotation === "number" ? params.rotation : 0);
    setGrainGlow(0.52);
    setCursorFlow(0.32);
  }, []);

  const getShaderCanvas = (): HTMLCanvasElement | null =>
    shaderWrapRef.current?.querySelector("canvas") ?? null;

  const compositeFlatShaderBlob = useCallback(async (outSize: number): Promise<Blob | null> => {
    await new Promise<void>((r) =>
      requestAnimationFrame(() => requestAnimationFrame(() => r())),
    );
    const shaderCanvas = getShaderCanvas();
    if (!shaderCanvas) return null;

    const out = document.createElement("canvas");
    out.width = outSize;
    out.height = outSize;
    const ctx = out.getContext("2d");
    if (!ctx) return null;

    ctx.clearRect(0, 0, outSize, outSize);
    ctx.drawImage(shaderCanvas, 0, 0, outSize, outSize);

    const url = maskUrlRef.current;
    if (url) {
      try {
        const mask = await loadImage(url);
        ctx.globalCompositeOperation = "destination-in";
        const mw = mask.naturalWidth;
        const mh = mask.naturalHeight;
        if (mw <= 0 || mh <= 0) {
          ctx.globalCompositeOperation = "source-over";
          return new Promise((res) => out.toBlob((b) => res(b ?? null)));
        }
        const s = Math.min(outSize / mw, outSize / mh);
        const dw = mw * s;
        const dh = mh * s;
        const dx = (outSize - dw) / 2;
        const dy = (outSize - dh) / 2;
        const source: CanvasImageSource =
          maskMode === "luminance" ? toLuminanceMaskCanvas(mask) : mask;
        ctx.drawImage(source, dx, dy, dw, dh);
        ctx.globalCompositeOperation = "source-over";
      } catch {
        setStatus("Could not apply the uploaded image for export.");
      }
    }

    return new Promise((res) => out.toBlob((b) => res(b ?? null)));
  }, [maskMode]);

  const downloadPng = useCallback(async () => {
    try {
      setStatus("");
      const node = previewExportRef.current;
      const pxRatio = exportPx / PREVIEW_PX;

      if (node) {
        try {
          await new Promise<void>((r) =>
            requestAnimationFrame(() => requestAnimationFrame(() => r())),
          );
          const blob = await toBlob(node, {
            pixelRatio: pxRatio,
            cacheBust: true,
            backgroundColor: "transparent",
            filter: () => true,
          });
          if (blob) {
            const a = document.createElement("a");
            a.download = "interactive-grain-gradient.png";
            a.href = URL.createObjectURL(blob);
            a.click();
            URL.revokeObjectURL(a.href);
            return;
          }
        } catch {
          /* fall through to flat fallback */
        }
      }

      const blob = await compositeFlatShaderBlob(exportPx);
      if (!blob) {
        setStatus("Export failed — try again in a moment.");
        return;
      }
      const a = document.createElement("a");
      a.download = "grain-gradient-flat.png";
      a.href = URL.createObjectURL(blob);
      a.click();
      URL.revokeObjectURL(a.href);
      setStatus("Exported flat shader (preview capture unavailable).");
    } catch {
      setStatus("Download failed.");
    }
  }, [compositeFlatShaderBlob, exportPx]);

  const copyCode = useCallback(async () => {
    try {
      const mask = maskUrlRef.current;
      let assetSrc = "/path/to/your-icon.png";
      if (mask) {
        const blob = await (await fetch(mask)).blob();
        const buf = await blob.arrayBuffer();
        const mime =
          blob.type ||
          (mask.toLowerCase().includes(".svg") ? "image/svg+xml" : "image/png");
        assetSrc = `data:${mime};base64,${arrayBufferToBase64(buf)}`;
      }

      const hasMask = Boolean(mask);
      const maskBlock =
        hasMask ?
          `
        maskImage: \`url(\${maskAsset})\`,
        WebkitMaskImage: \`url(\${maskAsset})\`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
`
        : "";

      const lumHint =
        maskMode === "luminance" && hasMask ?
          `
        // Black-on-white assets: pair with luminance masking in CSS`
        : "";

      const code = `"use client";

import { GrainGradient } from "@paper-design/shaders-react";

	/**
	 * Flat masked GrainGradient. Move offset/rotation with pointer coordinates to
	 * make the grain field feel draggable inside the mark.
	 */

const maskAsset = "${escapeAttr(assetSrc)}";${lumHint}

export function GrainIconPreview() {
  return (
    <div
      className="relative overflow-hidden rounded-xl bg-[#05070d] border border-neutral-800"
      style={{
        width: ${PREVIEW_PX},
        height: ${PREVIEW_PX},
      }}
    >
        <div
          className="absolute inset-0 rounded-[inherit] overflow-hidden"
          style={{
            ${maskBlock}
          }}
        >
	          <GrainGradient
            width="100%"
            height="100%"
            speed={${animate ? Number(speed.toFixed(4)) : 0}}
            colorBack="${escapeAttr(colorBack)}"
            colors={["${escapeAttr(colorA)}", "${escapeAttr(colorB)}"]}
            softness={${softness}}
            intensity={${intensity}}
            noise={${noise}}
            shape="${shape}"
            fit="${fit}"
            scale={${scale}}
	            offsetX={${Number(liveOffsetX.toFixed(4))}}
	            offsetY={${Number(liveOffsetY.toFixed(4))}}
	            rotation={${Number(liveRotation.toFixed(4))}}
            webGlContextAttributes={{ preserveDrawingBuffer: true }}
          />
        </div>
    </div>
  );
}
`;

      await navigator.clipboard.writeText(code);
      setStatus("Copied flat grain-gradient JSX.");
    } catch {
      setStatus("Copy failed.");
    }
  }, [
    animate,
    colorA,
    colorB,
    colorBack,
	    fit,
	    intensity,
	    maskMode,
	    noise,
	    liveOffsetX,
	    liveOffsetY,
	    liveRotation,
	    scale,
    shape,
    softness,
    speed,
  ]);

  const maskStyle: CSSProperties | undefined =
    maskUrl ?
      {
        maskImage: `url("${maskUrl}")`,
        WebkitMaskImage: `url("${maskUrl}")`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskComposite: maskMode === "luminance" ? "luminance" : undefined,
        WebkitMaskComposite:
          maskMode === "luminance" ? "luminance-source-in" : undefined,
      }
    : undefined;

  const sectionClass = "rounded-lg border px-4 py-4 space-y-4";
  const sectionStyle = {
    background: "var(--surface)",
    borderColor: "var(--border)",
  } as CSSProperties;

  return (
    <div className="mx-auto max-w-[1120px] px-6 py-12 lg:py-16">
      <p
        className="text-[13px] font-semibold tracking-wide uppercase mb-3"
        style={{ color: "var(--primary)" }}
      >
        Tools
      </p>
      <header className="mb-10 max-w-2xl space-y-3">
        <h1
          className="text-[32px] lg:text-[40px] font-normal tracking-tight"
          style={{ color: "var(--heading)" }}
        >
          Grain gradient logo
        </h1>
        <p className="text-[16px] leading-relaxed">
          A flat masked gradient that transforms the whole logo surface. Move across the mark
          to drag the grain field through the shape.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,1fr)_minmax(0,380px)] gap-10 lg:gap-12 items-start">
        {/* Main column: preview + essential controls */}
        <div className="flex flex-col items-center lg:items-stretch gap-6 order-first">
          <div
            ref={previewExportRef}
            className="relative overflow-hidden rounded-lg border shadow-[0_12px_40px_rgba(0,0,0,0.15)] mx-auto touch-none cursor-grab active:cursor-grabbing"
            onPointerMove={onPreviewPointerMove}
            onPointerLeave={resetPreviewPointer}
            onPointerCancel={resetPreviewPointer}
            style={{
              width: PREVIEW_PX,
              height: PREVIEW_PX,
              maxWidth: "100%",
              background: "#05070d",
              borderColor: "var(--border)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                ...maskStyle,
                background: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(183, 239, 255, ${activeGlow}), transparent 24%), radial-gradient(circle at 50% 58%, rgba(0, 82, 255, 0.5), transparent 45%)`,
                filter: "blur(12px)",
                opacity: 0.9,
              }}
            />
            <div
              className="absolute inset-0 rounded-[inherit]"
              style={{
                ...maskStyle,
              }}
            >
              <div ref={shaderWrapRef} className="size-full">
                <GrainGradient
                  width="100%"
                  height="100%"
                  speed={effectiveSpeed}
                  colorBack={colorBack}
                  colors={[colorA, colorB]}
                  softness={softness}
                  intensity={intensity}
                  noise={noise}
                  shape={shape}
                  fit={fit}
                  scale={liveScale}
                  offsetX={liveOffsetX}
                  offsetY={liveOffsetY}
                  rotation={liveRotation}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                  webGlContextAttributes={{ preserveDrawingBuffer: true }}
                />
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                ...maskStyle,
                background:
                  `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,.52), transparent 24%), linear-gradient(132deg, rgba(255,255,255,.36) 0%, transparent 34%, rgba(0,12,48,.42) 100%)`,
                mixBlendMode: "soft-light",
                opacity: 0.7,
              }}
            />
          </div>

          <div
            className="w-full max-w-[480px] rounded-xl border px-5 py-4 space-y-4"
            style={sectionStyle}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p
                  className="text-[12px] font-semibold tracking-wide uppercase"
                  style={{ color: "var(--secondary-text)" }}
                >
                  Essential controls
                </p>
                <p className="text-[13px]" style={{ color: "var(--secondary-text)" }}>
                  Move over the preview to test the grain flow.
                </p>
              </div>
              <Button variant="ghost" size="sm" type="button" onClick={resetDefaultLook}>
                Reset default
              </Button>
            </div>
            <label className="flex items-center gap-3 text-[14px] cursor-pointer">
              <input
                type="checkbox"
                checked={animate}
                onChange={(e) => setAnimate(e.target.checked)}
                className="size-4 rounded"
                style={{ accentColor: "var(--primary)" }}
              />
              <span>Animate shader</span>
            </label>
            <label className="text-[13px] space-y-1 block">
              <span className="flex justify-between text-[var(--secondary-text)]">
                <span>Speed</span>
                <span style={{ color: "var(--heading)" }}>{speed.toFixed(2)}x</span>
              </span>
              <input
                type="range"
                min={0}
                max={3}
                step={0.05}
                value={speed}
                onChange={(e) => {
                  setSpeed(Number(e.target.value));
                  setPresetName("Custom");
                }}
                disabled={!animate}
                className="w-full accent-[var(--primary)] disabled:opacity-40"
              />
            </label>
            <label className="text-[13px] space-y-1 block">
              <span className="flex justify-between text-[var(--secondary-text)]">
                <span>Cursor flow</span>
                <span style={{ color: "var(--heading)" }}>{cursorFlow.toFixed(2)}</span>
              </span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={cursorFlow}
                onChange={(e) => {
                  setCursorFlow(Number(e.target.value));
                  setPresetName("Custom");
                }}
                className="w-full accent-[var(--primary)]"
              />
            </label>
            <label className="text-[13px] space-y-1 block">
              <span className="flex justify-between text-[var(--secondary-text)]">
                <span>Bloom</span>
                <span style={{ color: "var(--heading)" }}>{grainGlow.toFixed(2)}</span>
              </span>
              <input
                type="range"
                min={0}
                max={1.2}
                step={0.02}
                value={grainGlow}
                onChange={(e) => {
                  setGrainGlow(Number(e.target.value));
                  setPresetName("Custom");
                }}
                className="w-full accent-[var(--primary)]"
              />
            </label>
          </div>
        </div>

        {/* Sidebar: focused tool panels */}
        <aside className="space-y-4 lg:sticky lg:top-6">
          <div
            className="rounded-lg border p-1"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className="grid grid-cols-4 gap-1">
              {[
                ["setup", "Setup"],
                ["style", "Style"],
                ["export", "Export"],
                ["advanced", "Advanced"],
              ].map(([key, label]) => {
                const active = activePanel === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() =>
                      setActivePanel(key as "setup" | "style" | "export" | "advanced")
                    }
                    className="min-h-10 rounded-md px-2 text-[12px] font-semibold transition-colors"
                    style={{
                      background: active ? "white" : "transparent",
                      color: active ? "var(--heading)" : "var(--secondary-text)",
                      boxShadow: active ? "0 1px 2px rgba(0,0,0,0.08)" : "none",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {activePanel === "setup" ? (
            <div style={sectionStyle} className={sectionClass}>
              <div>
                <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
                  Logo mask
                </p>
                <p className="text-[12px] leading-snug" style={{ color: "var(--secondary-text)" }}>
                  Use the Ascent mark or upload a transparent PNG/SVG silhouette.
                </p>
              </div>
              <input
                id={`file-${maskId}`}
                type="file"
                accept="image/png,.png,image/svg+xml,.svg"
                aria-label="Upload PNG or SVG mask"
                className="block w-full text-[14px] file:mr-3 file:rounded-md file:border file:border-solid file:bg-white file:px-3 file:py-1.5 file:text-[13px] cursor-pointer file:cursor-pointer file:[border-color:var(--border)]"
                style={{ accentColor: "var(--primary)" }}
                onChange={onFileChange}
              />
              {maskUrl ? (
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  onClick={clearMask}
                >
                  Remove mask
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="w-full"
                  onClick={restoreDefaultMask}
                >
                  Restore Ascent mask
                </Button>
              )}

              <div className="border-t pt-4 space-y-3" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
                    Presets
                  </p>
                  <p className="text-[12px]" style={{ color: "var(--secondary-text)" }}>
                    Active:{" "}
                    <span style={{ color: "var(--heading)", fontWeight: 600 }}>
                      {presetName}
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {grainGradientPresets.map((preset) => (
                    <Button
                      key={preset.name}
                      type="button"
                      variant={presetName === preset.name ? "secondary" : "ghost"}
                      size="sm"
                      onClick={() => applyNamedPreset(preset.name)}
                    >
                      {preset.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {activePanel === "style" ? (
            <div style={sectionStyle} className={sectionClass}>
              <div>
                <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
                  Colour and grain
                </p>
                <p className="text-[12px] leading-snug" style={{ color: "var(--secondary-text)" }}>
                  Adjust the logo surface without touching export or mask settings.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Background", colorBack, setColorBack],
                  ["Front A", colorA, setColorA],
                  ["Front B", colorB, setColorB],
                ].map(([label, value, setter]) => (
                  <label key={label as string} className="text-[12px] space-y-1 block">
                    <span style={{ color: "var(--secondary-text)" }}>{label as string}</span>
                    <input
                      type="color"
                      value={value as string}
                      onChange={(e) => {
                        (setter as (value: string) => void)(e.target.value);
                        setPresetName("Custom");
                      }}
                      className="h-11 w-full rounded-md border bg-white cursor-pointer p-0.5"
                      style={{ borderColor: "var(--border)" }}
                    />
                  </label>
                ))}
              </div>
              <label className="text-[13px] space-y-1 block">
                <span className="flex justify-between text-[var(--secondary-text)]">
                  <span>Softness</span>
                  <span style={{ color: "var(--heading)" }}>{softness.toFixed(2)}</span>
                </span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={softness}
                  onChange={(e) => {
                    setSoftness(Number(e.target.value));
                    setPresetName("Custom");
                  }}
                  className="w-full accent-[var(--primary)]"
                />
              </label>
              <label className="text-[13px] space-y-1 block">
                <span className="flex justify-between text-[var(--secondary-text)]">
                  <span>Intensity</span>
                  <span style={{ color: "var(--heading)" }}>{intensity.toFixed(2)}</span>
                </span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={intensity}
                  onChange={(e) => {
                    setIntensity(Number(e.target.value));
                    setPresetName("Custom");
                  }}
                  className="w-full accent-[var(--primary)]"
                />
              </label>
              <label className="text-[13px] space-y-1 block">
                <span className="flex justify-between text-[var(--secondary-text)]">
                  <span>Noise</span>
                  <span style={{ color: "var(--heading)" }}>{noise.toFixed(2)}</span>
                </span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={noise}
                  onChange={(e) => {
                    setNoise(Number(e.target.value));
                    setPresetName("Custom");
                  }}
                  className="w-full accent-[var(--primary)]"
                />
              </label>
              <label className="text-[13px] space-y-1 block">
                <span style={{ color: "var(--secondary-text)" }}>Shape</span>
                <select
                  value={shape}
                  onChange={(e) => {
                    setShape(e.target.value as GrainGradientShape);
                    setPresetName("Custom");
                  }}
                  className="w-full rounded-md border px-3 py-2 text-[14px] bg-white"
                  style={{ borderColor: "var(--border)", color: "var(--heading)" }}
                >
                  {SHAPES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}

          {activePanel === "export" ? (
            <div style={sectionStyle} className={sectionClass}>
              <div>
                <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
                  Export
                </p>
                <p className="text-[12px] leading-snug" style={{ color: "var(--secondary-text)" }}>
                  Save a PNG or copy the React shader snippet.
                </p>
              </div>
              <label className="text-[13px] space-y-1 block">
                <span style={{ color: "var(--secondary-text)" }}>PNG size</span>
                <select
                  value={exportPx}
                  onChange={(e) => setExportPx(Number(e.target.value))}
                  className="w-full rounded-md border px-3 py-2 text-[14px] bg-white"
                  style={{ borderColor: "var(--border)", color: "var(--heading)" }}
                >
                  <option value={512}>512 px</option>
                  <option value={1024}>1024 px</option>
                  <option value={2048}>2048 px</option>
                </select>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="primary" type="button" onClick={downloadPng}>
                  Download PNG
                </Button>
                <Button variant="secondary" type="button" onClick={copyCode}>
                  Copy JSX
                </Button>
              </div>
              <p className="text-[13px]" style={{ color: "var(--secondary-text)" }}>
                {status ||
                  "PNG captures the full preview when supported; otherwise it exports the masked shader."}
              </p>
            </div>
          ) : null}

          {activePanel === "advanced" ? (
            <div style={sectionStyle} className={sectionClass}>
              <div>
                <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
                  Advanced
                </p>
                <p className="text-[12px] leading-snug" style={{ color: "var(--secondary-text)" }}>
                  Fine tune shader placement and how uploaded masks are read.
                </p>
              </div>
              <label className="text-[13px] space-y-1 block">
                <span style={{ color: "var(--secondary-text)" }}>Fit</span>
                <select
                  value={fit}
                  onChange={(e) => {
                    setFit(e.target.value as ShaderFitChoice);
                    setPresetName("Custom");
                  }}
                  className="w-full rounded-md border px-3 py-2 text-[14px] bg-white"
                  style={{ borderColor: "var(--border)", color: "var(--heading)" }}
                >
                  {FITS.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-[13px] space-y-1 block">
                <span className="flex justify-between text-[var(--secondary-text)]">
                  <span>Scale</span>
                  <span style={{ color: "var(--heading)" }}>{scale.toFixed(2)}</span>
                </span>
                <input
                  type="range"
                  min={0.2}
                  max={2.5}
                  step={0.01}
                  value={scale}
                  onChange={(e) => {
                    setScale(Number(e.target.value));
                    setPresetName("Custom");
                  }}
                  className="w-full accent-[var(--primary)]"
                />
              </label>
              <label className="text-[13px] space-y-1 block">
                <span className="flex justify-between text-[var(--secondary-text)]">
                  <span>Offset X</span>
                  <span style={{ color: "var(--heading)" }}>{offsetX.toFixed(2)}</span>
                </span>
                <input
                  type="range"
                  min={-1}
                  max={1}
                  step={0.01}
                  value={offsetX}
                  onChange={(e) => {
                    setOffsetX(Number(e.target.value));
                    setPresetName("Custom");
                  }}
                  className="w-full accent-[var(--primary)]"
                />
              </label>
              <label className="text-[13px] space-y-1 block">
                <span className="flex justify-between text-[var(--secondary-text)]">
                  <span>Offset Y</span>
                  <span style={{ color: "var(--heading)" }}>{offsetY.toFixed(2)}</span>
                </span>
                <input
                  type="range"
                  min={-1}
                  max={1}
                  step={0.01}
                  value={offsetY}
                  onChange={(e) => {
                    setOffsetY(Number(e.target.value));
                    setPresetName("Custom");
                  }}
                  className="w-full accent-[var(--primary)]"
                />
              </label>
              <label className="text-[13px] space-y-1 block">
                <span className="flex justify-between text-[var(--secondary-text)]">
                  <span>Rotation</span>
                  <span style={{ color: "var(--heading)" }}>{Math.round(rotation)}deg</span>
                </span>
                <input
                  type="range"
                  min={0}
                  max={360}
                  step={1}
                  value={rotation}
                  onChange={(e) => {
                    setRotation(Number(e.target.value));
                    setPresetName("Custom");
                  }}
                  className="w-full accent-[var(--primary)]"
                />
              </label>
              <div className="border-t pt-4 space-y-3" style={{ borderColor: "var(--border)" }}>
                <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
                  Mask blending
                </p>
                <div className="flex flex-wrap gap-3 text-[14px]">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={`mask-mode-${maskId}`}
                      checked={maskMode === "alpha"}
                      onChange={() => setMaskMode("alpha")}
                      className="accent-[var(--primary)]"
                    />
                    Alpha
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={`mask-mode-${maskId}`}
                      checked={maskMode === "luminance"}
                      onChange={() => setMaskMode("luminance")}
                      className="accent-[var(--primary)]"
                    />
                    Luminance
                  </label>
                </div>
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
