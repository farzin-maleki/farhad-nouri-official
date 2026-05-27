import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/portrait.jpg";
import action from "@/assets/action.jpg";
import fitnessHero from "@/assets/fitness-hero.jpg";
import wrestlerSpotlight from "@/assets/gallery/zex-poster.png";

export const Route = createFileRoute("/life-story")({
  head: () => ({
    meta: [
      { title: "Life Story — Farhad Nouri" },
      { name: "description", content: "The journey of Farhad Nouri — from his first day on the mat to international competition." },
    ],
  }),
  component: LifeStory,
});

const timeline = [
  { year: "2008", title: "First Steps on the Mat", text: "At eight years old, walked into a local wrestling club in Tehran. The smell of the mat never left." },
  { year: "2012", title: "National Youth Team", text: "Selected for the national youth squad after a breakout regional championship.", img: portrait },
  { year: "2015", title: "First National Title", text: "Won my first senior national title in freestyle wrestling. A pivotal turning point." },
  { year: "2018", title: "International Debut", text: "Stepped onto the international stage and brought home a continental medal.", img: action },
  { year: "2020", title: "Crossover to Fitness", text: "Began competing in fitness and physique categories — a new discipline, same intensity." },
  { year: "2023", title: "Coaching the Next Wave", text: "Opened doors to private coaching and clinics, sharing everything the mat taught me.", img: wrestlerSpotlight },
  { year: "Today", title: "Building a Legacy", text: "Still competing. Still teaching. Still chasing the next level — every single day." },
];

function LifeStory() {
  return (
    <div>
      <SiteNav />
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <img src={wrestlerSpotlight} alt="Farhad Nouri spotlight" width={1080} height={1920} className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6 animate-fade-in">My Journey</p>
          <h1 className="font-display text-6xl md:text-8xl text-gradient-gold animate-fade-up">LIFE STORY</h1>
          <p className="mt-6 max-w-xl text-muted-foreground font-serif italic text-lg animate-fade-up">A boy. A mat. A relentless will to rise.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>I was born in a country where wrestling isn't just sport — it's heritage. The Pahlevan tradition teaches strength with humility, victory with honor. From my first practice as a child, I knew this was the path.</p>
          <p>What followed was years of early mornings, brutal training camps, weight cuts, podiums, and heartbreaks. Every loss became a lesson. Every win became fuel.</p>
          <p className="font-serif italic text-foreground text-xl border-l-2 border-accent pl-6">"The mat doesn't lie. It will show you exactly who you are."</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-card/30">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent text-center mb-4">Milestones</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-20">THE TIMELINE</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-background" />
                  <div className="pl-12 md:pl-0 md:[direction:ltr] md:text-right md:pr-12 first:md:pr-12">
                    <p className="font-display text-5xl text-gradient-gold mb-2">{item.year}</p>
                    <h3 className="font-display text-2xl mb-3">{item.title.toUpperCase()}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                  <div className="pl-12 md:pl-12 md:[direction:ltr] mt-6 md:mt-0">
                    {item.img && (
                      <img src={item.img} alt={item.title} width={800} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden my-16">
        <img src={fitnessHero} alt="Training" width={1920} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background/10" />
        <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">The Mission</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">EVERY DAY. NO EXCEPTIONS.</h2>
            <p className="text-muted-foreground text-lg">Discipline is the bridge between dreams and results. I built mine one brick at a time — and I help others build theirs.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
