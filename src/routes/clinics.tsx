import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/clinics")({
  head: () => ({
    meta: [
      { title: "Clinics — Farhad Nouri" },
      { name: "description", content: "Wrestling clinics for teams, clubs, and programs." },
    ],
  }),
  component: () => (
    <div>
      <SiteNav />
      <section className="pt-40 pb-24 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Work With Me</p>
        <h1 className="text-6xl md:text-7xl font-serif mb-6">Wrestling Clinics</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">Bring me in to work with your team. Clinics blend technical instruction, live drilling, and open Q&A — perfect for schools, clubs, and programs looking for a competitive edge.</p>
      </section>
      <section className="pb-28 px-6 text-center">
        <Link to="/contact" className="inline-block border border-accent text-accent px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-accent-foreground transition">Host a clinic</Link>
      </section>
      <SiteFooter />
    </div>
  ),
});
