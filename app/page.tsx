"use client";

import { useEffect, useRef, ReactNode } from "react";
import Image from "next/image";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Image src="/logo.png" alt="Sifan" width={60} height={60} className="object-contain" />
          <div className="flex gap-8 text-sm text-neutral-500">
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#work" className="hover:text-neutral-900 transition-colors">Work</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 max-w-5xl mx-auto">
        <FadeIn delay={0}>
          <p className="text-sm text-neutral-400 tracking-widest uppercase mb-6">UX Designer</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="text-6xl font-bold tracking-tight leading-tight mb-8">
            Hi, I&apos;m Sifan.<br />
            <span className="text-neutral-400">I design experiences</span><br />
            people love to use.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-xl text-neutral-500 max-w-xl leading-relaxed">
            I craft clean, intuitive interfaces that sit at the intersection of form and function.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="mt-12 flex gap-4">
            <a href="#work" className="px-6 py-3 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-neutral-200 text-sm rounded-full hover:border-neutral-400 transition-colors">
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">About</p>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Designing with purpose.</h2>
              <p className="text-neutral-500 leading-relaxed mb-4">
                I&apos;m Sifan, a UX Designer passionate about creating digital products that are both beautiful and meaningful. I believe great design solves real problems while delighting the people who use it.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                My process is rooted in research, empathy, and iteration — always keeping the user at the center of every decision.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 gap-4">
            {["User Research", "Interaction Design", "Prototyping", "Design Systems"].map((skill, i) => (
              <FadeIn key={skill} delay={i * 80}>
                <div className="p-6 bg-white rounded-2xl border border-neutral-100">
                  <p className="text-sm font-medium">{skill}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">Work</p>
            <h2 className="text-4xl font-bold tracking-tight mb-16">Selected Projects</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0}>
              <a href="/work/soccergoat" className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white block">
                <div className="w-full h-48 bg-[#1a4d2e] rounded-xl mb-6 flex items-center justify-center group-hover:brightness-110 transition-all">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">SG</span>
                      </div>
                      <span className="text-white font-bold text-lg tracking-tight">SoccerGOAT</span>
                    </div>
                    <p className="text-green-400 text-xs">Mobile App · Physical Device</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 mb-2">Mobile App · Product Design · UX Research</p>
                <h3 className="text-xl font-semibold mb-2">SoccerGOAT</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">A soccer companion app and physical display device designed to bring North American fans closer to the beautiful game.</p>
              </a>
            </FadeIn>
            {[
              { title: "Project Two", desc: "Design system built for a SaaS product used by 50k+ users.", tag: "Web · Design System" },
              { title: "Project Three", desc: "End-to-end UX research and redesign of a checkout flow.", tag: "E-commerce · Research" },
              { title: "Project Four", desc: "Dashboard for data visualization with accessibility in mind.", tag: "Dashboard · A11y" },
            ].map((project, i) => (
              <FadeIn key={project.title} delay={(i + 1) * 100}>
                <div className="group p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white">
                  <div className="w-full h-48 bg-neutral-100 rounded-xl mb-6 group-hover:bg-neutral-200 transition-colors" />
                  <p className="text-xs text-neutral-400 mb-2">{project.tag}</p>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">Contact</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Let&apos;s work together.</h2>
            <p className="text-neutral-500 mb-10 max-w-md mx-auto leading-relaxed">
              Have a project in mind or just want to say hello? My inbox is always open.
            </p>
            <a
              href="mailto:sifan@example.com"
              className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors text-sm"
            >
              sifan@example.com
            </a>
            <div className="mt-10 flex justify-center gap-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Dribbble</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Twitter</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-neutral-400">
          <span>© 2026 Sifan</span>
          <span>Designed & Built with care</span>
        </div>
      </footer>

    </main>
  );
}
