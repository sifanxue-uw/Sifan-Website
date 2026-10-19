"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/app/context/language";

function pentagon(r: number, rot: number) {
  return Array.from({ length: 5 }, (_, i) => {
    const a = rot + (i * 2 * Math.PI) / 5;
    return `${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

const TOP = -Math.PI / 2;
const SPOKES = Array.from({ length: 5 }, (_, i) => {
  const a = TOP + (i * 2 * Math.PI) / 5;
  return { x1: 3.6 * Math.cos(a), y1: 3.6 * Math.sin(a), x2: 10 * Math.cos(a), y2: 10 * Math.sin(a) };
});

const SIZE = 20;

export function Cursor() {
  const { lang } = useLanguage();
  const cuju = lang === "zh";
  const posRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const state = useRef({ mx: -200, my: -200, x: -200, y: -200, angle: 0 });

  useEffect(() => {
    const s = state.current;
    const onMove = (e: MouseEvent) => {
      s.mx = e.clientX;
      s.my = e.clientY;
    };

    const animate = () => {
      const dx = (s.mx - s.x) * 0.3;
      const dy = (s.my - s.y) * 0.3;
      s.x += dx;
      s.y += dy;
      s.angle += dx * 3.2 + dy * 0.6;
      if (posRef.current) posRef.current.style.transform = `translate(${s.x}px, ${s.y}px)`;
      if (ballRef.current) ballRef.current.style.transform = `rotate(${s.angle}deg)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={posRef}
      className="pointer-events-none fixed top-0 left-0 z-[200]"
      style={{ willChange: "transform", mixBlendMode: cuju ? "normal" : "difference" }}
    >
      <div ref={ballRef} style={{ marginLeft: -SIZE / 2, marginTop: -SIZE / 2, width: SIZE, height: SIZE, willChange: "transform" }}>
        <svg viewBox="-12 -12 24 24" width={SIZE} height={SIZE} style={{ display: "block" }}>
          {cuju ? (
            <g fill="none" stroke="#7A4A1C" strokeWidth="1">
              <circle r="11" fill="#D9A961" stroke="none" />
              <ellipse rx="11" ry="4.5" />
              <ellipse rx="11" ry="4.5" transform="rotate(90)" />
            </g>
          ) : (
            <g stroke="#fff" strokeWidth="1.1" strokeLinecap="round" fill="none">
              <circle r="11" />
              <polygon points={pentagon(3.6, TOP)} fill="#fff" stroke="none" />
              {SPOKES.map((p, i) => (
                <line key={i} x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} />
              ))}
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

export function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}
