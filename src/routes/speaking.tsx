import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking — Farhad Nouri" },
      { name: "description", content: "Speaking engagements on discipline, resilience, and the wrestler's mindset." },
    ],
  }),
  component: () => (
    <div>
      <SiteNav />
      <section className="pt-40 pb-24 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Work With Me</p>
        <h1 className="text-6xl md:text-7xl font-serif mb-6">Speaking</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">From student-athletes to corporate teams, I speak on resilience, pressure, leadership, and chasing big goals — through the lens of a wrestler's journey.</p>
      </section>
      <section className="pb-28 px-6 text-center">
        <Link to="/contact" className="inline-block border border-accent text-accent px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-accent-foreground transition">Book me to speak</Link>
      </section>
      <SiteFooter />
    </div>
  ),
});
