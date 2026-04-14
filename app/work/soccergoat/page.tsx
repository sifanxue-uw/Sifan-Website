"use client";

import { useEffect, useRef, ReactNode } from "react";
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
      { threshold: 0.1 }
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

const stats = [
  { value: "98", label: "Survey Respondents" },
  { value: "73%", label: "Have Used a Sports App" },
  { value: "88%", label: "Prefer Mobile Access" },
  { value: "75%", label: "Want Favorite Team Info" },
];

const painPoints = [
  { title: "Fragmented Broadcasters", desc: "Soccer content is scattered across CBS, NBC, ESPN, Apple TV, and more — each requiring a separate subscription." },
  { title: "Lack of Soccer Culture", desc: "In the U.S., only 20% follow soccer vs. 52% NFL and 42% NBA — a huge gap in cultural engagement." },
  { title: "Complex Interfaces", desc: "Existing apps are cluttered with ads and unnecessary features, making it hard to find key match info quickly." },
  { title: "Missed Matches", desc: "Busy users miss games due to scheduling conflicts with no simple way to stay updated on the go." },
];

const designFeatures = [
  { title: "Personalization", desc: "Choose your favourite club, jersey number, and typography to make the app feel like yours." },
  { title: "Morning Newspaper", desc: "A daily digest of the latest soccer news, curated around the teams and leagues you care about." },
  { title: "Live Interaction", desc: "Post-game sentiment analysis and real-time fan community features keep the experience social." },
  { title: "Integrated Cross-Play", desc: "Seamlessly connects with the SoccerGOAT physical display device for in-stadium and at-home use." },
  { title: "One-Click Access", desc: "Home team logo shortcuts and a simplified menu bar reduce friction to near zero." },
  { title: "Loyalty & Pins", desc: "Earn loyalty rewards and collect pins as you engage, adding gamification to the fan experience." },
];

export default function SoccerGOAT() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold tracking-tight text-lg hover:text-neutral-500 transition-colors">
            Sifan
          </Link>
          <Link href="/#work" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            ← Back to Work
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">Mobile App · Product Design · UX Research</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="text-6xl font-bold tracking-tight leading-tight mb-6">
            SoccerGOAT
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-xl text-neutral-500 max-w-2xl leading-relaxed">
            Where Passion Meets Simplicity and Personalization — a soccer companion app and physical display device designed to bring North American fans closer to the beautiful game.
          </p>
        </FadeIn>

        {/* Hero visual */}
        <FadeIn delay={300}>
          <div className="mt-14 w-full rounded-3xl overflow-hidden bg-[#1a4d2e] flex items-center justify-center" style={{ minHeight: "360px" }}>
            <div className="text-center py-20 px-8">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SG</span>
                </div>
                <span className="text-white text-4xl font-bold tracking-tight">SoccerGOAT</span>
              </div>
              <p className="text-green-300 text-lg">Mobile App + Physical Display Device</p>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                {["Live Scores", "Fan Community", "Personalization", "Cross-Play Device"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-green-600 text-green-300 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FadeIn>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Role</p>
              <p className="text-neutral-700 font-medium">UX Designer<br />Product Designer</p>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Deliverables</p>
              <p className="text-neutral-700 font-medium">Mobile App Design<br />Physical Device Design<br />UX Research</p>
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Tools</p>
              <p className="text-neutral-700 font-medium">Figma · Blender<br />User Interviews · Surveys</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Background */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">01 — Background</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6">The Problem</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-16">
              As a soccer fan living in North America, I experienced the challenges that hinder the sport&apos;s accessibility and enjoyment firsthand. Soccer trails far behind the NFL and NBA despite rapid growth — particularly among younger, diverse audiences under 45.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <FadeIn key={point.title} delay={i * 80}>
                <div className="p-8 rounded-2xl border border-neutral-100 bg-white">
                  <div className="w-8 h-1 bg-green-500 rounded mb-4" />
                  <h3 className="font-semibold mb-2">{point.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Market context */}
          <FadeIn delay={200}>
            <div className="mt-12 p-8 rounded-2xl bg-[#1a4d2e] text-white">
              <p className="text-green-300 text-sm uppercase tracking-widest mb-4">Market Opportunity</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-green-400">1.75M</p>
                  <p className="text-green-200 text-sm mt-1">viewers for Messi&apos;s MLS debut — the most-watched MLS match in 20 years</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">795M</p>
                  <p className="text-green-200 text-sm mt-1">minutes watched of Ted Lasso S3 — entertainment broadening soccer&apos;s appeal</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">$5B+</p>
                  <p className="text-green-200 text-sm mt-1">projected economic impact from the 2026 FIFA World Cup in North America</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Research */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">02 — Research</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Understanding the User</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-16">
              A survey of 98 respondents explored needs and frustrations with existing sports apps, alongside in-depth interviews to uncover deeper motivations.
            </p>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 80}>
                <div className="p-6 bg-white rounded-2xl border border-neutral-100 text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">{stat.value}</p>
                  <p className="text-neutral-500 text-sm leading-snug">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Personas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="p-8 bg-white rounded-2xl border border-neutral-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-bold">BS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Bella Stones</h3>
                    <p className="text-neutral-400 text-sm">22 · Marketing Coordinator · Ann Arbor</p>
                  </div>
                </div>
                <blockquote className="text-neutral-600 text-sm italic border-l-2 border-green-500 pl-4 mb-4">
                  &ldquo;I would like to have easier access to soccer related news and knowledge!&rdquo;
                </blockquote>
                <div className="space-y-2">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest">Pain Points</p>
                  {["Overwhelmed by complex apps", "Too much beginner friction", "Intrusive ads and pop-ups"].map(p => (
                    <p key={p} className="text-sm text-neutral-600 flex gap-2"><span className="text-red-400">·</span>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="p-8 bg-white rounded-2xl border border-neutral-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-bold">RB</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Rob Bowen</h3>
                    <p className="text-neutral-400 text-sm">21 · CS Student · Washington, DC</p>
                  </div>
                </div>
                <blockquote className="text-neutral-600 text-sm italic border-l-2 border-green-500 pl-4 mb-4">
                  &ldquo;I would like to experience a better soccer app!&rdquo;
                </blockquote>
                <div className="space-y-2">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest">Pain Points</p>
                  {["Misses matches due to busy schedule", "Cluttered apps with unnecessary features", "Hard to quickly find match info"].map(p => (
                    <p key={p} className="text-sm text-neutral-600 flex gap-2"><span className="text-red-400">·</span>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">03 — Design Process</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6">From Chaos to Clarity</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-16">
              The design process began with affinity mapping and post-it sessions, evolving through information architecture, wireframes, and low-fidelity prototypes before reaching high-fidelity screens.
            </p>
          </FadeIn>

          {/* Process steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {["Affinity Mapping", "Information Architecture", "Wireframing", "Hi-Fi Prototype"].map((step, i) => (
              <FadeIn key={step} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 text-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium">{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Key Features */}
          <FadeIn>
            <h3 className="text-2xl font-bold tracking-tight mb-8">Key Features Designed</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designFeatures.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 60}>
                <div className="p-6 rounded-2xl border border-neutral-100 bg-white">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Device */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">04 — Physical Design</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Beyond the Screen</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-12">
              SoccerGOAT extends beyond mobile — a physical display device designed from initial sketches through multiple 3D modeling iterations, built to sit on a soccer ball and deliver live scores and ratings in real-time.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-neutral-900 text-white">
                <p className="text-green-400 text-sm uppercase tracking-widest mb-4">Hardware</p>
                <h3 className="text-2xl font-bold mb-4">Live Display Device</h3>
                <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                  A compact, soccer-ball-inspired physical device with an embedded display screen. Designed through sketch, foam model, and multiple Blender 3D iterations before reaching the final render.
                </p>
                <div className="space-y-3">
                  {["Compact form factor fits on a soccer ball", "Embedded display for live scores & ratings", "Green + white + navy brand colorway", "Connects wirelessly with the mobile app"].map(f => (
                    <p key={f} className="text-sm text-neutral-300 flex gap-2"><span className="text-green-400">✓</span>{f}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="p-8 rounded-2xl bg-white border border-neutral-100">
                <p className="text-neutral-400 text-sm uppercase tracking-widest mb-4">Design Journey</p>
                <h3 className="text-2xl font-bold mb-4">Sketch → Model → Render</h3>
                <div className="space-y-4">
                  {[
                    { step: "Concept Sketches", desc: "Initial hand-drawn explorations of form and function, exploring multiple silhouettes." },
                    { step: "Foam Prototyping", desc: "Physical foam models to test scale, grip, and placement on a real soccer ball." },
                    { step: "3D Modeling in Blender", desc: "Multiple mesh iterations refining the organic, tubular form wrapping around the display." },
                    { step: "Final Render", desc: "High-fidelity 3D render with SoccerGOAT brand colors and materials." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-1 bg-green-200 rounded flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{item.step}</p>
                        <p className="text-neutral-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final Design */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-neutral-400 tracking-widest uppercase mb-4">05 — Final Design</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6">The Result</h2>
            <p className="text-neutral-500 leading-relaxed max-w-2xl mb-12">
              A cohesive green-accented mobile app covering onboarding, home feed, live scores, standings, and the fan community — paired with a striking physical device.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Create Account", "Home Feed", "Live Scores & Ratings", "Standings Table", "Customized Page", "Live Display Device"].map((screen, i) => (
              <FadeIn key={screen} delay={i * 60}>
                <div className="rounded-2xl bg-[#1a4d2e] aspect-[9/16] flex items-center justify-center border border-green-900">
                  <div className="text-center px-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/30 mx-auto mb-3 flex items-center justify-center">
                      <span className="text-green-400 text-xs font-bold">SG</span>
                    </div>
                    <p className="text-green-300 text-xs font-medium">{screen}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nav bottom */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="text-neutral-400 text-sm mb-6">Thanks for reading</p>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Want to see more work?</h2>
            <Link
              href="/#work"
              className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors text-sm"
            >
              ← Back to All Projects
            </Link>
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-neutral-400">
          <span>© 2026 Sifan</span>
          <span>SoccerGOAT Case Study</span>
        </div>
      </footer>

    </main>
  );
}
