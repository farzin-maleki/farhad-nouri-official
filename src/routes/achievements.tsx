import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Trophy, Medal, Award } from "lucide-react";
import medals from "@/assets/medals.jpg";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Medals — Farhad Nouri" },
      { name: "description", content: "Career medals and titles across wrestling and fitness competitions." },
    ],
  }),
  component: Achievements,
});

type Item = {
  category: "wrestling" | "fitness";
  year: number;
  comp: string;
  position: "gold" | "silver" | "bronze";
  location: string;
};

const items: Item[] = [
  { category: "wrestling", year: 2024, comp: "National Freestyle Championship", position: "gold", location: "Tehran, Iran" },
  { category: "wrestling", year: 2023, comp: "Asian Cup — 86 kg", position: "silver", location: "Bishkek, KGZ" },
  { category: "wrestling", year: 2022, comp: "International Open", position: "gold", location: "Istanbul, TUR" },
  { category: "wrestling", year: 2021, comp: "Continental Championship", position: "bronze", location: "Almaty, KAZ" },
  { category: "wrestling", year: 2019, comp: "National Senior Cup", position: "gold", location: "Tehran, Iran" },
  { category: "wrestling", year: 2018, comp: "International Debut Tournament", position: "silver", location: "Doha, QAT" },
  { category: "fitness", year: 2024, comp: "Mr. Tehran Classic Physique", position: "gold", location: "Tehran, Iran" },
  { category: "fitness", year: 2023, comp: "Middle East Pro Qualifier", position: "silver", location: "Dubai, UAE" },
  { category: "fitness", year: 2022, comp: "National Bodybuilding Open", position: "bronze", location: "Tehran, Iran" },
  { category: "fitness", year: 2021, comp: "Regional Physique Cup", position: "gold", location: "Shiraz, Iran" },
];

const colors = {
  gold: "from-yellow-500 to-amber-700 text-yellow-300",
  silver: "from-slate-300 to-slate-500 text-slate-200",
  bronze: "from-amber-700 to-amber-900 text-amber-400",
};

function Achievements() {
  const [filter, setFilter] = useState<"all" | "wrestling" | "fitness">("all");
  const list = filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      <SiteNav />
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <img src={medals} alt="Trophies and medals" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6 animate-fade-in">Career</p>
          <h1 className="font-display text-6xl md:text-8xl text-gradient-gold animate-fade-up">ACHIEVEMENTS</h1>
          <p className="mt-4 text-muted-foreground font-serif italic text-lg">Earned. Never given.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/40 py-10">
        <div className="mx-auto max-w-4xl px-6 grid grid-cols-3 gap-6 text-center">
          {(["gold", "silver", "bronze"] as const).map((p) => {
            const count = items.filter((i) => i.position === p).length;
            const Icon = p === "gold" ? Trophy : p === "silver" ? Medal : Award;
            return (
              <div key={p}>
                <Icon className={`mx-auto h-10 w-10 mb-3 ${p === "gold" ? "text-yellow-400" : p === "silver" ? "text-slate-300" : "text-amber-600"}`} />
                <p className="font-display text-4xl text-foreground">{count}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">{p}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Filters */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {(["all", "wrestling", "fitness"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 text-xs uppercase tracking-[0.25em] font-display border transition-all ${
                  filter === f
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {f === "all" ? "All Disciplines" : f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((item, i) => (
              <div
                key={`${item.year}-${item.comp}`}
                className="group relative border border-border bg-card p-8 hover:border-accent transition-all animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[item.position]}`} />
                <div className="flex items-start justify-between mb-6">
                  <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${colors[item.position]} flex items-center justify-center`}>
                    <Trophy className="h-7 w-7 text-background" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{item.category}</span>
                </div>
                <p className="font-display text-4xl text-gradient-gold mb-2">{item.year}</p>
                <h3 className="font-display text-xl mb-2">{item.comp.toUpperCase()}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
                <p className={`mt-4 text-xs uppercase tracking-[0.25em] font-display ${colors[item.position].split(" ").pop()}`}>
                  {item.position} medal
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
