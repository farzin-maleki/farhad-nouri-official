import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Farhad Nouri" },
      { name: "description", content: "Get in touch with Farhad Nouri." },
    ],
  }),
  component: () => (
    <div>
      <SiteNav />
      <section className="pt-40 pb-24 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Contact</p>
        <h1 className="text-6xl md:text-7xl font-serif mb-6">Get in Touch</h1>
        <p className="max-w-xl mx-auto text-muted-foreground mb-12">For training, clinics, speaking, or media inquiries — drop a message.</p>
      </section>
      <section className="pb-28 px-6">
        <form className="mx-auto max-w-xl space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Name</label>
            <input type="text" className="w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-accent" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</label>
            <input type="email" className="w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-accent" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
            <textarea rows={5} className="w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-accent" />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-[0.2em] text-sm hover:bg-primary/90">Send Message</button>
        </form>
      </section>
      <SiteFooter />
    </div>
  ),
});
