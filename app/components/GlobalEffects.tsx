"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/app/context/language";

function pentagon(cx: number, cy: number, r: number, rot: number) {
  return Array.from({ length: 5 }, (_, i) => {
    const a = rot + (i * 2 * Math.PI) / 5;
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

const TOP = -Math.PI / 2;
const OUTER = Array.from({ length: 5 }, (_, i) => {
  const a = TOP + (i * 2 * Math.PI) / 5;
  return { cx: 11.2 * Math.cos(a), cy: 11.2 * Math.sin(a), a };
});

export function Cursor() {
  const { lang } = useLanguage();
  const cuju = lang === "zh";
  const posRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const state = useRef({ mx: -200, my: -200, x: -200, y: -200, angle: 0, scale: 1, target: 1, press: false });

  useEffect(() => {
    const s = state.current;
    const onMove = (e: MouseEvent) => {
      s.mx = e.clientX;
      s.my = e.clientY;
      const el = e.target as Element | null;
      s.target = el && el.closest("a, button, [role=button], input, textarea") ? 1.6 : 1;
    };
    const onDown = () => { s.press = true; };
    const onUp = () => { s.press = false; };

    const animate = () => {
      const dx = (s.mx - s.x) * 0.3;
      const dy = (s.my - s.y) * 0.3;
      s.x += dx;
      s.y += dy;
      s.angle += dx * 3.2 + dy * 0.6;
      const goal = s.press ? s.target * 0.8 : s.target;
      s.scale += (goal - s.scale) * 0.2;
      if (posRef.current) posRef.current.style.transform = `translate(${s.x}px, ${s.y}px)`;
      if (ballRef.current) ballRef.current.style.transform = `rotate(${s.angle}deg) scale(${s.scale})`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={posRef}
      className="pointer-events-none fixed top-0 left-0 z-[200]"
      style={{ willChange: "transform" }}
    >
      <div ref={ballRef} className="-translate-x-1/2 -translate-y-1/2" style={{ marginLeft: -14, marginTop: -14, width: 28, height: 28, willChange: "transform" }}>
        {cuju ? (
          <svg viewBox="-13 -13 26 26" width="28" height="28" style={{ display: "block", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}>
            <defs>
              <radialGradient id="cuju-grad" cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#E3B873" />
                <stop offset="100%" stopColor="#B07A3A" />
              </radialGradient>
              <clipPath id="cuju-clip"><circle r="12" /></clipPath>
            </defs>
            <circle r="12" fill="url(#cuju-grad)" />
            <g clipPath="url(#cuju-clip)" fill="none" stroke="#6B3F14" strokeWidth="0.9">
              {[0, 60, 120].map((deg) => (
                <ellipse key={deg} rx="12" ry="5.2" transform={`rotate(${deg})`} />
              ))}
              {[0, 60, 120].map((deg) => (
                <ellipse key={"s" + deg} rx="12" ry="5.2" transform={`rotate(${deg})`} stroke="#F4DDB0" strokeWidth="0.5" strokeDasharray="1 1.2" />
              ))}
            </g>
            <circle r="12" fill="none" stroke="#6B3F14" strokeWidth="1" />
          </svg>
        ) : (
                <svg viewBox="-13 -13 26 26" width="28" height="28" style={{ display: "block", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}>
          <defs>
            <clipPath id="ball-clip"><circle r="12" /></clipPath>
          </defs>
          <circle r="12" fill="#fff" />
          <g clipPath="url(#ball-clip)" stroke="#1C1917" strokeWidth="0.8" strokeLinejoin="round">
            <polygon points={pentagon(0, 0, 4.6, TOP)} fill="#1C1917" />
            {OUTER.map((o, i) => {
              const ia = o.a + Math.PI;
              const px = 4.6 * Math.cos(o.a), py = 4.6 * Math.sin(o.a);
              const qx = o.cx + 3.6 * Math.cos(ia), qy = o.cy + 3.6 * Math.sin(ia);
              return (
                <g key={i}>
                  <line x1={px} y1={py} x2={qx} y2={qy} fill="none" />
                  <polygon points={pentagon(o.cx, o.cy, 4.6, o.a)} fill="#1C1917" />
                </g>
              );
            })}
          </g>
          <circle r="12" fill="none" stroke="#1C1917" strokeWidth="1" />
        </svg>
        )}
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
