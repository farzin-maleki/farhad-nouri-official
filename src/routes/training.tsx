import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Private Training — Farhad Nouri" },
      { name: "description", content: "One-on-one wrestling coaching with Iranian wrestler Farhad Nouri." },
    ],
  }),
  component: () => (
    <div>
      <SiteNav />
      <section className="pt-40 pb-24 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Work With Me</p>
        <h1 className="text-6xl md:text-7xl font-serif mb-6">Private Training</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">One-on-one coaching built around your individual goals. We focus on technique, conditioning, mental preparation, and competition strategy — tailored to your level.</p>
      </section>
      <section className="pb-28 px-6">
        <div className="mx-auto max-w-4xl grid gap-px bg-border md:grid-cols-3 text-center">
          {[
            { t: "Technique", d: "Stance, ties, finishes, scrambles." },
            { t: "Conditioning", d: "Wrestling-specific strength & endurance." },
            { t: "Mindset", d: "Compete with calm, focused intensity." },
          ].map((x) => (
            <div key={x.t} className="bg-background p-10">
              <h3 className="font-serif text-2xl mb-3 text-accent">{x.t}</h3>
              <p className="text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact" className="inline-block border border-accent text-accent px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-accent-foreground transition">Book a session</Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  ),
});
