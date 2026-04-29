"use client";

import type { GrainGradientShape } from "@paper-design/shaders";
import {
  GrainGradient,
  grainGradientPresets,
} from "@paper-design/shaders-react";
import Link from "next/link";
import { toBlob } from "html-to-image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Button } from "@/components/Button";

const PREVIEW_PX = 400;
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

export function GrainIconTool() {
  const maskId = useId();
  const shaderWrapRef = useRef<HTMLDivElement | null>(null);
  /** Full preview card (grain + faux 3D) for raster export */
  const previewExportRef = useRef<HTMLDivElement | null>(null);
  const [maskUrl, setMaskUrl] = useState<string | null>(null);
  const maskUrlRef = useRef<string | null>(null);

  const [presetName, setPresetName] = useState("Grain 3D object");

  /** Distinct defaults: gem-like volumetric vibe, not the marketing hero shader */
  const [colorBack, setColorBack] = useState("#080811");
  const [colorA, setColorA] = useState("#6d62f0");
  const [colorB, setColorB] = useState("#e956a8");
  const [softness, setSoftness] = useState(0.52);
  const [intensity, setIntensity] = useState(0.58);
  const [noise, setNoise] = useState(0.58);
  const [shape, setShape] = useState<GrainGradientShape>("sphere");
  const [speed, setSpeed] = useState(1);
  const [fit, setFit] = useState<ShaderFitChoice>("contain");
  const [scale, setScale] = useState(1.06);
  const [offsetX, setOffsetX] = useState(0.02);
  const [offsetY, setOffsetY] = useState(-0.04);
  const [rotation, setRotation] = useState(42);
  const [animate, setAnimate] = useState(true);
  const [exportPx, setExportPx] = useState(1024);
  const [status, setStatus] = useState<string>("");
  const [maskMode, setMaskMode] = useState<"alpha" | "luminance">("alpha");

  /** Faux 3D presentation (CSS) — turns a flat silhouette into an object-like form */
  const [perspectivePx, setPerspectivePx] = useState(980);
  const [rotateXDeg, setRotateXDeg] = useState(14);
  const [rotateYDeg, setRotateYDeg] = useState(-20);
  const [extrusionDepth, setExtrusionDepth] = useState(12);
  const [lighting, setLighting] = useState(0.62);

  const effectiveSpeed = animate ? speed : 0;
  maskUrlRef.current = maskUrl;

  useEffect(
    () => () => {
      const u = maskUrlRef.current;
      if (u) URL.revokeObjectURL(u);
    },
    [],
  );

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
    const prev = maskUrlRef.current;
    if (prev) URL.revokeObjectURL(prev);
    const url = URL.createObjectURL(f);
    setMaskUrl(url);
    setPresetName("Custom");
    setStatus("");
    e.target.value = "";
  }, []);

  const clearMask = useCallback(() => {
    const u = maskUrlRef.current;
    if (u) URL.revokeObjectURL(u);
    maskUrlRef.current = null;
    setMaskUrl(null);
  }, []);

  const applyPresetGrain3d = useCallback(() => {
    setPresetName("Grain 3D object");
    setColorBack("#080811");
    setColorA("#6d62f0");
    setColorB("#e956a8");
    setSoftness(0.52);
    setIntensity(0.58);
    setNoise(0.58);
    setShape("sphere");
    setFit("contain");
    setScale(1.06);
    setOffsetX(0.02);
    setOffsetY(-0.04);
    setRotation(42);
    setAnimate(true);
    setSpeed(1);
    setPerspectivePx(980);
    setRotateXDeg(14);
    setRotateYDeg(-20);
    setExtrusionDepth(12);
    setLighting(0.62);
  }, []);

  const applyPresetAscentHero = useCallback(() => {
    setPresetName("Site hero (reference)");
    setColorBack("#000a0f");
    setColorA("#5a4fcf");
    setColorB("#5a4fcf");
    setSoftness(0.7);
    setIntensity(1);
    setNoise(0.49);
    setShape("wave");
    setFit("none");
    setScale(1.08);
    setOffsetX(-0.02);
    setOffsetY(0.18);
    setRotation(0);
    setAnimate(true);
    setSpeed(1);
    setPerspectivePx(920);
    setRotateXDeg(0);
    setRotateYDeg(0);
    setExtrusionDepth(0);
    setLighting(0.2);
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
    setPerspectivePx(900);
    setRotateXDeg(10);
    setRotateYDeg(-14);
    setExtrusionDepth(10);
    setLighting(0.5);
  }, []);

  const getShaderCanvas = (): HTMLCanvasElement | null =>
    shaderWrapRef.current?.querySelector("canvas") ?? null;

  const compositeFlatShaderBlob = async (outSize: number): Promise<Blob | null> => {
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
  };

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
            a.download = "grain-3d-icon.png";
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
  }, [exportPx, maskMode]);

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
 * Grain-in-mask + CSS “3D”: perspective wrapper, faux extrusion stacks, lighting overlay.
 * Motion speed belongs on whatever you treat as the main preview (below).
 */

const maskAsset = "${escapeAttr(assetSrc)}";${lumHint}

export function GrainIcon3DPreview() {
  return (
    <div
      className="relative rounded-xl bg-[#0a0c14] border border-neutral-800"
      style={{
        width: ${PREVIEW_PX},
        height: ${PREVIEW_PX},
        perspective: ${Math.round(perspectivePx)},
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transform: \`rotateX(${rotateXDeg}deg) rotateY(${rotateYDeg}deg)\`,
        }}
      >
        <div
          className="relative size-full rounded-[inherit] overflow-hidden"
          style={{
            width: ${PREVIEW_PX},
            height: ${PREVIEW_PX},${maskBlock}
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
            offsetX={${offsetX}}
            offsetY={${offsetY}}
            rotation={${rotation}}
            webGlContextAttributes={{ preserveDrawingBuffer: true }}
          />
        </div>
      </div>
    </div>
  );
}
`;

      await navigator.clipboard.writeText(code);
      setStatus("Copied React code — add extrusion/lighting/CSS from the tool manually.");
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
    maskUrl,
    noise,
    offsetX,
    offsetY,
    perspectivePx,
    rotateXDeg,
    rotateYDeg,
    rotation,
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

  const sectionClass = "rounded-xl border px-5 py-4 space-y-3";
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
          className="text-[32px] lg:text-[40px] font-bold tracking-tight"
          style={{ color: "var(--heading)" }}
        >
          Grain 3D object
        </h1>
        <p className="text-[16px] leading-relaxed">
          Turn a flat icon into a volumetric-feeling grain object: perspective,
          shading, stacked depth behind the silhouette, then drive{" "}
          <strong style={{ color: "var(--heading)" }}>motion speed here in the preview</strong> —
          distinct from flat hero backgrounds on the{" "}
          <Link
            href="/"
            className="font-semibold underline-offset-4 hover:underline"
            style={{ color: "var(--primary)" }}
          >
            site
          </Link>
          .
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,1fr)_minmax(0,380px)] gap-10 lg:gap-12 items-start">
        {/* Main column: preview + primary motion */}
        <div className="flex flex-col items-center lg:items-stretch gap-6 order-first">
          <div className="w-full max-w-[480px] space-y-4">
            <p
              className="text-[12px] font-bold tracking-wide uppercase text-center lg:text-left"
              style={{ color: "var(--secondary-text)" }}
            >
              Motion (main preview)
            </p>
            <label className="flex items-center gap-3 text-[14px] cursor-pointer justify-center lg:justify-start">
              <input
                type="checkbox"
                checked={animate}
                onChange={(e) => setAnimate(e.target.checked)}
                className="size-4 rounded"
                style={{ accentColor: "var(--primary)" }}
              />
              <span>Animate shader</span>
            </label>
            <label className="text-[13px] space-y-2 block">
              <span
                className="flex justify-between"
                style={{ color: "var(--secondary-text)" }}
              >
                <span className="font-semibold">Speed</span>
                <span style={{ color: "var(--heading)" }}>{speed.toFixed(2)}×</span>
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
                className="w-full accent-[var(--primary)] disabled:opacity-40 h-2"
              />
            </label>
          </div>

          <div
            ref={previewExportRef}
            className="relative overflow-hidden rounded-2xl border shadow-[0_12px_40px_rgba(0,0,0,0.15)] mx-auto touch-pan-y"
            style={{
              width: PREVIEW_PX,
              height: PREVIEW_PX,
              maxWidth: "100%",
              background: "#06060c",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="size-full rounded-[inherit]"
              style={{
                perspective: `${perspectivePx}px`,
              }}
            >
              <div
                className="size-full rounded-[inherit] will-change-transform"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${rotateXDeg}deg) rotateY(${rotateYDeg}deg)`,
                }}
              >
                <div
                  className="relative isolate size-full rounded-[inherit]"
                  style={{
                    isolation: "isolate",
                  }}
                >
                  {/* Faux extrusion: dark stacks behind masked face */}
                  {maskUrl && extrusionDepth > 0 ?
                    [...Array(extrusionDepth)].map((_, i) => {
                      const tier = extrusionDepth - i;
                      return (
                        <div
                          key={i}
                          aria-hidden
                          className="pointer-events-none absolute inset-0 rounded-[inherit]"
                          style={{
                            ...maskStyle,
                            zIndex: i,
                            background: `rgb(${Math.min(42, tier * 4)}, ${Math.min(36, tier * 3)}, ${68 + tier * 3})`,
                            transform: `translate(${tier * 0.55}px, ${tier * 0.72}px)`,
                          }}
                        />
                      );
                    })
                  : null}

                  {/* Lit grain surface */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-[inherit]"
                    style={{
                      ...maskStyle,
                      zIndex: extrusionDepth,
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
                        scale={scale}
                        offsetX={offsetX}
                        offsetY={offsetY}
                        rotation={rotation}
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                        }}
                        webGlContextAttributes={{ preserveDrawingBuffer: true }}
                      />
                    </div>
                  </div>

                  {/* Specular / occlusion pass */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      ...maskStyle,
                      zIndex: extrusionDepth + 1,
                      opacity: lighting,
                      background:
                        "linear-gradient(128deg, rgba(255,255,255,.55) 0%, transparent 42%, rgba(0,8,26,.82) 100%)",
                      mixBlendMode: "soft-light",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[480px] space-y-3">
            <p
              className="text-[12px] font-bold tracking-wide uppercase text-center lg:text-left"
              style={{ color: "var(--secondary-text)" }}
            >
              Volume & lighting
            </p>
            <label className="text-[13px] space-y-1 block">
              <span className="text-[var(--secondary-text)]">
                Tilt X ({rotateXDeg}°)
              </span>
              <input
                type="range"
                min={-32}
                max={40}
                step={1}
                value={rotateXDeg}
                onChange={(e) => {
                  setRotateXDeg(Number(e.target.value));
                  setPresetName("Custom");
                }}
                className="w-full accent-[var(--primary)]"
              />
            </label>
            <label className="text-[13px] space-y-1 block">
              <span className="text-[var(--secondary-text)]">
                Turn Y ({rotateYDeg}°)
              </span>
              <input
                type="range"
                min={-50}
                max={50}
                step={1}
                value={rotateYDeg}
                onChange={(e) => {
                  setRotateYDeg(Number(e.target.value));
                  setPresetName("Custom");
                }}
                className="w-full accent-[var(--primary)]"
              />
            </label>
            <label className="text-[13px] space-y-1 block">
              <span className="text-[var(--secondary-text)]">
                Perspective ({perspectivePx}px)
              </span>
              <input
                type="range"
                min={420}
                max={1400}
                step={10}
                value={perspectivePx}
                onChange={(e) => {
                  setPerspectivePx(Number(e.target.value));
                  setPresetName("Custom");
                }}
                className="w-full accent-[var(--primary)]"
              />
            </label>
            <label className="text-[13px] space-y-1 block">
              <span className="text-[var(--secondary-text)]">
                Extrusion depth ({extrusionDepth} layers)
              </span>
              <input
                type="range"
                min={0}
                max={24}
                step={1}
                value={extrusionDepth}
                onChange={(e) => {
                  setExtrusionDepth(Number(e.target.value));
                  setPresetName("Custom");
                }}
                disabled={!maskUrl}
                className="w-full accent-[var(--primary)] disabled:opacity-40"
              />
            </label>
            <label className="text-[13px] space-y-1 block">
              <span className="text-[var(--secondary-text)]">
                Surface lighting ({lighting.toFixed(2)})
              </span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.02}
                value={lighting}
                onChange={(e) => {
                  setLighting(Number(e.target.value));
                  setPresetName("Custom");
                }}
                className="w-full accent-[var(--primary)]"
              />
            </label>
            <label className="text-[13px] space-y-1 block">
              <span className="text-[var(--secondary-text)]">
                PNG export ({exportPx}px)
              </span>
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
            <div className="flex flex-wrap gap-2 pt-1">
              <Button variant="primary" type="button" onClick={downloadPng}>
                Download PNG
              </Button>
              <Button variant="secondary" type="button" onClick={copyCode}>
                Copy JSX
              </Button>
            </div>
            {status ?
              <p className="text-[13px]" style={{ color: "var(--secondary-text)" }}>
                {status}
              </p>
            : null}
          </div>

          <p className="text-[12px] text-center lg:text-left max-w-[480px]" style={{ color: "var(--secondary-text)" }}>
            PNG tries to capture the full preview (grain + 3D CSS). If capture fails, you get a flat
            shader pass instead.
          </p>
        </div>

        {/* Sidebar: asset + shader detail */}
        <div className="space-y-5">
          <div style={sectionStyle} className={sectionClass}>
            <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
              Flat icon
            </p>
            <input
              id={`file-${maskId}`}
              type="file"
              accept="image/png,.png,image/svg+xml,.svg"
              aria-label="Upload PNG or SVG mask"
              className="block w-full text-[14px] file:mr-3 file:rounded-md file:border file:border-solid file:bg-white file:px-3 file:py-1.5 file:text-[13px] cursor-pointer file:cursor-pointer file:[border-color:var(--border)]"
              style={{ accentColor: "var(--primary)" }}
              onChange={onFileChange}
            />
            {maskUrl ?
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={clearMask}
              >
                Remove mask
              </Button>
            : null}
            <p className="text-[12px] leading-snug" style={{ color: "var(--secondary-text)" }}>
              Upload a monochrome or transparent PNG/SVG silhouette for the volumetric silhouette.
              No file = full rectangle preview.
            </p>
          </div>

          <div style={sectionStyle} className={sectionClass}>
            <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
              Presets
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" size="sm" type="button" onClick={applyPresetGrain3d}>
                Grain 3D object
              </Button>
              <Button variant="ghost" size="sm" type="button" onClick={applyPresetAscentHero}>
                Site hero (reference)
              </Button>
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
            <p className="text-[12px]" style={{ color: "var(--secondary-text)" }}>
              Active:{" "}
              <span style={{ color: "var(--heading)", fontWeight: 600 }}>
                {presetName}
              </span>
            </p>
          </div>

          <div style={sectionStyle} className={sectionClass}>
            <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
              Shader colours
            </p>
            <div className="grid grid-cols-2 gap-3">
              <label className="text-[13px] space-y-1 block">
                <span style={{ color: "var(--secondary-text)" }}>Background</span>
                <input
                  type="color"
                  value={colorBack}
                  onChange={(e) => {
                    setColorBack(e.target.value);
                    setPresetName("Custom");
                  }}
                  className="w-full h-10 rounded-md border bg-white cursor-pointer p-0.5"
                  style={{ borderColor: "var(--border)" }}
                />
              </label>
              <label className="text-[13px] space-y-1 block">
                <span style={{ color: "var(--secondary-text)" }}>Front A</span>
                <input
                  type="color"
                  value={colorA}
                  onChange={(e) => {
                    setColorA(e.target.value);
                    setPresetName("Custom");
                  }}
                  className="w-full h-10 rounded-md border bg-white cursor-pointer p-0.5"
                  style={{ borderColor: "var(--border)" }}
                />
              </label>
              <label className="text-[13px] space-y-1 block col-span-2">
                <span style={{ color: "var(--secondary-text)" }}>Front B</span>
                <input
                  type="color"
                  value={colorB}
                  onChange={(e) => {
                    setColorB(e.target.value);
                    setPresetName("Custom");
                  }}
                  className="w-full h-10 rounded-md border bg-white cursor-pointer p-0.5"
                  style={{ borderColor: "var(--border)" }}
                />
              </label>
            </div>
          </div>

          <div style={sectionStyle} className={sectionClass}>
            <p className="text-[13px] font-semibold" style={{ color: "var(--heading)" }}>
              Grain shader
            </p>
            <label className="text-[13px] space-y-1 block">
              <span style={{ color: "var(--secondary-text)" }}>
                Softness ({softness.toFixed(2)})
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
              <span style={{ color: "var(--secondary-text)" }}>
                Intensity ({intensity.toFixed(2)})
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
              <span style={{ color: "var(--secondary-text)" }}>
                Noise ({noise.toFixed(2)})
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
              <span style={{ color: "var(--secondary-text)" }}>
                Scale ({scale.toFixed(2)})
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
              <span style={{ color: "var(--secondary-text)" }}>
                Pattern offset X ({offsetX.toFixed(2)})
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
              <span style={{ color: "var(--secondary-text)" }}>
                Pattern offset Y ({offsetY.toFixed(2)})
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
              <span style={{ color: "var(--secondary-text)" }}>
                Pattern rotation ({Math.round(rotation)}°)
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
          </div>

          <div style={sectionStyle} className={sectionClass}>
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
      </div>
    </div>
  );
}
