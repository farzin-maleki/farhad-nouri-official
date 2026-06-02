import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — Farhad Nouri" },
      {
        name: "description",
        content: "Match highlights, training videos, and behind-the-scenes content.",
      },
    ],
  }),
  component: Videos,
});

// Placeholder IDs — replace with real YouTube IDs when provided
type Vid = { id: string; title: string; cat: "wrestling" | "fitness" };
const videos: Vid[] = [
  {
    id: "B1uOv7vCK_U",
    title: "2022 English Senior Wrestling Championships Final",
    cat: "wrestling",
  },
  { id: "PZ7PqcXhdKw", title: "U23 Asian Championships", cat: "wrestling" },
  { id: "MbpbU8RW7IM", title: "English Campionships 2023", cat: "wrestling" },
  { id: "Q-RsH4RMfP4", title: "", cat: "wrestling" },
  { id: "E3x9joC8GfU", title: "Full Push Day Workout", cat: "fitness" },
  { id: "OqWcS_xBCHk", title: "", cat: "fitness" },
  { id: "jQ3V5YazKS8", title: "Stage Prep — Week 4", cat: "fitness" },
];

function Videos() {
  const [filter, setFilter] = useState<"all" | "wrestling" | "fitness">("all");
  const [playing, setPlaying] = useState<string | null>(null);
  const list = filter === "all" ? videos : videos.filter((v) => v.cat === filter);

  return (
    <div>
      <SiteNav />
      <section className="pt-40 pb-12 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Watch</p>
        <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">VIDEOS</h1>
        <p className="mt-4 text-muted-foreground font-serif italic text-lg">
          Highlights, workouts and behind the scenes.
        </p>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(["all", "wrestling", "fitness"] as const).map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setPlaying(null);
                }}
                className={`px-6 py-3 text-xs uppercase tracking-[0.25em] font-display border transition-all ${
                  filter === f
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {f === "all" ? "All Videos" : f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((v, i) => {
              const key = `${i}-${v.id}`;
              const isPlaying = playing === key;
              return (
                <div key={key} className="group border border-border bg-card overflow-hidden">
                  <div className="relative aspect-video bg-background">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    ) : (
                      <button
                        onClick={() => setPlaying(key)}
                        className="absolute inset-0 group/play"
                        aria-label={`Play ${v.title}`}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                          alt={v.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-105"
                        />
                        <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover/play:bg-background/20 transition-colors">
                          <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center">
                            <Play
                              className="h-6 w-6 text-accent-foreground ml-1"
                              fill="currentColor"
                            />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                      {v.cat}
                    </p>
                    <h3 className="font-display text-lg">{v.title.toUpperCase()}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
