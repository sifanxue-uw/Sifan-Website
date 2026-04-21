"use client";

import { useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-6");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="opacity-0 translate-y-6 transition-all duration-700 ease-out">
      {children}
    </div>
  );
}

export default function About() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-transparent.png" alt="Sifan" width={72} height={72} className="object-contain" />
            <span className="font-semibold tracking-tight text-base">Sifan Xue</span>
          </Link>
          <div className="flex gap-8 text-sm font-medium tracking-widest uppercase text-neutral-500">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <Link href="/#work" className="hover:text-neutral-900 transition-colors">Work</Link>
            <Link href="/about" className="text-neutral-900">About</Link>
          </div>
        </div>
      </nav>

      {/* About Me */}
      <section className="pt-32 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">About</p>
            <h1 className="text-5xl font-bold tracking-tight mb-16">About Me</h1>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image src="/about.jpg" alt="Sifan Xue" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div>
                <h2 className="text-3xl font-bold mb-2">Nice to meet you!</h2>
                <p className="text-lg font-semibold mb-6">I&apos;m <span className="font-extrabold">Sifan Xue</span>,</p>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  a UX designer and researcher currently pursuing a Master&apos;s degree in Human-Centered Design &amp; Engineering at the University of Washington.
                </p>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  I began my undergraduate studies in fine arts, where I trained in drawing, watercolor, and oil painting. Over time, my interests gradually shifted from purely expressing ideas to designing solutions for real problems. This led me to explore graphic design and product design, where I became more interested in how design can address people&apos;s needs and everyday challenges.
                </p>
                <p className="text-neutral-500 leading-relaxed mb-4">
                  During this process, I realized how important research and analysis are for improving and iterating design. That discovery eventually led me to UX. I was drawn to the way UX combines creativity with structured thinking — using research, testing, and feedback to refine ideas and create better experiences.
                </p>
                <p className="text-neutral-500 leading-relaxed">
                  To me, art, design, and UX are closely connected. All of them involve telling a story, understanding people, and continuously refining a piece of work through iteration.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills / Tools / Resume */}
      <section className="py-20 px-6 bg-[#f5ece8]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FadeIn>
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <ul className="space-y-2 text-neutral-600">
                {["UX Research", "Usability Testing", "Interaction Design", "Information Architecture", "Wireframing & Prototyping", "Visual & Product Design"].map(s => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Tools</h3>
              <ul className="space-y-2 text-neutral-600">
                {["Figma", "FigJam / Miro", "Adobe Illustrator & Photoshop", "Fusion 360, Blender, Rhino", "JIRA & Confluence", "Dovetail, Maze, UserTesting"].map(t => (
                  <li key={t}>• {t}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Resume</h3>
              <a
                href="/resume.pdf"
                className="inline-block px-6 py-3 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors"
              >
                DOWNLOAD
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Passions */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight mb-12">Passions</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/sculpture.jpg", label: "Sculpture" },
              { src: "/photography.jpg", label: "Photography" },
              { src: "/soccer.jpg", label: "Soccer" },
              { src: "/latteart.jpg", label: "Latte Art" },
            ].map(({ src, label }, i) => (
              <FadeIn key={label} delay={i * 80}>
                <div className="flex flex-col gap-2">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                    <Image src={src} alt={label} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-sm font-medium">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Sifan Xue</h3>
            <p className="text-neutral-400 text-sm">Let&apos;s build thoughtful experiences together.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="mailto:sifanxuecreate@gmail.com" className="text-neutral-300 text-sm hover:text-white transition-colors">sifanxuecreate@gmail.com</a>
            <p className="text-neutral-500 text-xs">© 2026 SIFAN XUE</p>
          </div>
          <a
            href="https://linkedin.com/in/sifan-xue-8b2503280"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-neutral-200 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a66c2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </footer>

    </main>
  );
}
