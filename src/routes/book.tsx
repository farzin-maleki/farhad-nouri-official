import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, Swords, Check, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Session — Farhad Nouri" },
      {
        name: "description",
        content: "Book a 1-on-1 wrestling or fitness session with Farhad Nouri.",
      },
    ],
  }),
  component: Book,
});

const offers = [
  {
    icon: Dumbbell,
    title: "Fitness Session",
    calLink: "farhad-nouri-hooenz/fitness-session",
    price: "£100",
    duration: "90 minutes",
    desc: "Strength, hypertrophy, conditioning, and competition prep. Built around your goals and biomechanics.",
    bullets: [
      "Full body assessment",
      "Custom workout plan",
      "Nutrition guidance",
      "Form correction on every lift",
      "Mindset coaching included",
    ],
  },
  {
    icon: Swords,
    title: "Wrestling Session",
    calLink: "farhad-nouri-hooenz/wrestling-session",
    price: "£100",
    duration: "90 minutes",
    desc: "Technique, drills, live wrestling, and competition strategy from a national-level competitor.",
    bullets: [
      "Stance, motion and level changes",
      "Takedown technique drilling",
      "Top / bottom positions",
      "Live wrestling rounds",
      "Match tape breakdown",
    ],
  },
];

const faqs = [
  {
    q: "Where do sessions take place?",
    a: "In-person sessions take place at my training facility in Tehran. Online video coaching is also available worldwide.",
  },
  {
    q: "Do I need experience?",
    a: "Not at all. Sessions are tailored to all levels — from complete beginners to competing athletes.",
  },
  {
    q: "What should I bring?",
    a: "Training clothes, wrestling shoes if you have them, water and a notebook. Everything else is provided.",
  },
  {
    q: "Can I book a package?",
    a: "Yes. Discounts apply on packs of 5 and 10 sessions. Mention it when booking.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Free reschedule up to 48 hours before the session. After that, the session is charged.",
  },
];

function Book() {
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    // Load Cal.com embed script
    if (!calLoaded) {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onload = () => setCalLoaded(true);
      document.head.appendChild(script);
    }
  }, []);

  const openCal = (calLink: string, title: string) => {
    setActiveSession(title);
    if ((window as any).Cal) {
      (window as any).Cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#C9A96E" } },
      });
      (window as any).Cal("modal", {
        calLink,
      });
    } else {
      // Fallback: open in new tab
      window.open(`https://cal.com/${calLink}`, "_blank");
    }
  };

  return (
    <div>
      <SiteNav />

      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Train With Me</p>
        <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">BOOK A SESSION</h1>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground text-lg">
          Two paths. Same standard. Pick the one that fits your goal.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          {offers.map((o) => (
            <div
              key={o.title}
              className="relative border border-border bg-card p-10 hover:border-accent transition-all flex flex-col"
            >
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 border border-accent/30">
                <o.icon className="h-7 w-7 text-accent" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-2">{o.title.toUpperCase()}</h2>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-5xl text-gradient-gold">{o.price}</span>
                <span className="text-sm text-muted-foreground">/ {o.duration}</span>
              </div>
              <p className="text-muted-foreground mb-8">{o.desc}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {o.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openCal(o.calLink, o.title)}
                className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-6 py-4 font-display tracking-[0.25em] uppercase text-sm hover:bg-accent/90 transition-all w-full"
              >
                Book Now{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Secure booking powered by Cal.com
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card/30 py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent text-center mb-4">
            Questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-14">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border border-border bg-background p-6 hover:border-accent transition-all"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between font-display text-lg">
                  {f.q}
                  <span className="text-accent text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
