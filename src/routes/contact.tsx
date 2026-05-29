import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Instagram, Youtube, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Farhad Nouri" },
      {
        name: "description",
        content: "Get in touch with Farhad Nouri — training, media, and collaborations.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <SiteNav />
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Reach Out</p>
        <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">CONTACT</h1>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground text-lg">
          Training, media, or collaborations — let's talk.
        </p>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-5">
          {/* Form */}
          <form
            className="md:col-span-3 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — I'll be in touch soon.");
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2 font-display">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2 font-display">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2 font-display">
                Subject
              </label>
              <input
                type="text"
                className="w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2 font-display">
                Message
              </label>
              <textarea
                required
                rows={6}
                className="w-full bg-card border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-4 font-display uppercase tracking-[0.25em] text-sm hover:bg-accent/90 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Side info */}
          <aside className="md:col-span-2 space-y-8">
            <div className="border border-border bg-card p-8">
              <MapPin className="h-6 w-6 text-accent mb-4" />
              <h3 className="font-display text-xl mb-2">LOCATION</h3>
              <p className="text-muted-foreground">
                11A, Hamilton Business Park, Stirling Way, London WD6 2FR
              </p>
            </div>
            <div className="border border-border bg-card p-8">
              <Mail className="h-6 w-6 text-accent mb-4" />
              <h3 className="font-display text-xl mb-2">EMAIL</h3>
              <a
                href="mailto:farhadnourilo74@gmail.com"
                className="text-muted-foreground hover:text-accent"
              >
                farhadnourilo74@gmail.com
              </a>
            </div>
            <div className="border border-border bg-card p-8">
              <h3 className="font-display text-xl mb-4">FOLLOW</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/farhad.nourri"
                  aria-label="Instagram"
                  className="h-11 w-11 border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
