"use client";

import { useRef, useEffect } from "react";
import "./MagnetLines.css";

type Shape = 'line' | 'dot' | 'diamond' | 'arrow';

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  shape?: Shape;
  className?: string;
  style?: React.CSSProperties;
}

function getSpanStyle(
  shape: Shape,
  lineColor: string,
  lineWidth: string,
  lineHeight: string
): React.CSSProperties {
  switch (shape) {
    case 'dot':
      return {
        backgroundColor: lineColor,
        width: lineHeight,
        height: lineHeight,
        borderRadius: '9999px',
      };
    case 'diamond':
      return {
        backgroundColor: lineColor,
        width: lineHeight,
        height: lineHeight,
        borderRadius: 0,
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      };
    case 'arrow':
      return {
        backgroundColor: lineColor,
        width: lineHeight,
        height: lineHeight,
        borderRadius: 0,
        clipPath: 'polygon(50% 0%, 90% 100%, 50% 62%, 10% 100%)',
      };
    default:
      return {
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight,
      };
  }
}

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineColor = "#efefef",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  shape = 'line' as Shape,
  className = "",
  style = {},
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLSpanElement>("span");

    const onPointerMove = (pointer: PointerEvent) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;
        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r =
          ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);
        item.style.setProperty("--rotate", `${r}deg`);
      });
    };

    window.addEventListener("pointermove", onPointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y } as PointerEvent);
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [rows, columns]);

  const total = rows * columns;

  return (
    <div
      ref={containerRef}
      className={`magnetLines-container ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          style={{
            ["--rotate" as string]: `${baseAngle}deg`,
            ...getSpanStyle(shape, lineColor, lineWidth, lineHeight),
          }}
        />
      ))}
    </div>
  );
}
