import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Trophy,
  Image as ImageIcon,
  Play,
  Dumbbell,
  Calendar,
  BookOpen,
} from "lucide-react";
import heroMat from "@/assets/hero-mat.jpg";
import portrait from "@/assets/gallery/arm-raised.jpg";
import action from "@/assets/gallery/euro-diploma.jpg";
import contactPre from "@/assets/gallery/blue-win-ukraine.jpg";
import galleryPre from "@/assets/gallery/WhatsApp Image 2026-05-29 at 09.12.19.jpeg";
import videosPre from "@/assets/gallery/tirana-win.jpg";
import bookingPre from "@/assets/gallery/WhatsApp Image 2026-05-29 at 09.12.19.jpeg";
import fitnessHero from "@/assets/fitness-hero.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farhad Nouri — Wrestler & Fitness Athlete" },
      {
        name: "description",
        content:
          "Official site of Farhad Nouri, professional wrestler and fitness athlete. Train with a champion.",
      },
    ],
  }),
  component: Index,
});

const previews = [
  {
    to: "/life-story",
    label: "Life Story",
    desc: "From a small mat in Tehran to international podiums.",
    icon: BookOpen,
    img: portrait,
  },
  {
    to: "/achievements",
    label: "Achievements",
    desc: "Medals, titles and milestones across two disciplines.",
    icon: Trophy,
    img: action,
  },
  {
    to: "/gallery",
    label: "Gallery",
    desc: "Cinematic moments from competitions and training.",
    icon: ImageIcon,
    img: galleryPre,
  },
  {
    to: "/videos",
    label: "Videos",
    desc: "Match highlights, workouts and behind the scenes.",
    icon: Play,
    img: videosPre,
  },
  {
    to: "/book",
    label: "Book a Session",
    desc: "Train with me — wrestling or fitness, one-on-one.",
    icon: Calendar,
    img: bookingPre,
  },
  {
    to: "/contact",
    label: "Contact",
    desc: "For media, sponsorships and collaborations.",
    icon: Dumbbell,
    img: contactPre,
  },
] as const;

function Index() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img
          src={heroMat}
          alt="Farhad Nouri"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-radial opacity-40 mix-blend-multiply" />
        {/* particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-accent/60"
              style={{
                top: `${(i * 37) % 100}%`,
                left: `${(i * 53) % 100}%`,
                animation: `float-particle ${6 + (i % 5)}s ease-in-out ${i * 0.4}s infinite`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="font-display tracking-[0.5em] text-xs text-accent mb-6 animate-fade-in">
            WRESTLER · FITNESS ATHLETE
          </p>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-none animate-fade-up">
            <span className="block text-foreground">FARHAD</span>
            <span className="block text-gradient-gold">NOURI</span>
          </h1>
          <p
            className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground font-serif italic animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            "Strength is not given. It is forged — one round, one rep, one day at a time."
          </p>
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/book"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-display tracking-[0.25em] uppercase hover:bg-accent/90 transition-all"
            >
              Book a Session{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/life-story"
              className="group inline-flex items-center gap-3 border border-accent text-accent px-8 py-4 text-sm font-display tracking-[0.25em] uppercase hover:bg-accent hover:text-accent-foreground transition-all"
            >
              My Story{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card/40 py-10">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "15+", l: "Years on the mat" },
            { v: "30+", l: "Medals" },
            { v: "2", l: "Disciplines" },
            { v: "100s", l: "Athletes coached" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-4xl md:text-5xl text-gradient-gold">{s.v}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PREVIEW GRID */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent text-center mb-4">Explore</p>
          <h2 className="font-display text-5xl md:text-6xl text-center mb-16">THE JOURNEY</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previews.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group relative overflow-hidden border border-border bg-card aspect-[4/5]"
              >
                <img
                  src={p.img}
                  alt={p.label}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-display text-2xl md:text-3xl mb-2">
                    {p.label.toUpperCase()}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                  <span className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.25em]">
                    Discover{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src={fitnessHero}
          alt="Train"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Train With Me</p>
          <h2 className="font-display text-5xl md:text-6xl mb-6">READY TO LEVEL UP?</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            One-on-one wrestling technique or pure strength &amp; conditioning. Pick a path. Show
            up. Transform.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 font-display tracking-[0.25em] uppercase text-sm hover:bg-accent/90 transition-all"
          >
            Book a Session <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
