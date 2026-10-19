"use client";

import { Navbar } from "@/app/components/Navbar";
import { ContactFooter } from "@/app/components/ContactFooter";
import { ProjectGrid } from "@/app/components/ProjectGrid";

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-neutral-900 font-sans cursor-none">
      <Navbar />
      <section className="pt-32 pb-28 px-6">
        <ProjectGrid group="playground" />
      </section>
      <ContactFooter />
    </main>
  );
}
