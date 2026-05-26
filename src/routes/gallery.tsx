import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import heroMat from "@/assets/hero-mat.jpg";
import portrait from "@/assets/portrait.jpg";
import action from "@/assets/action.jpg";
import fitnessHero from "@/assets/fitness-hero.jpg";
import wrestlerSpotlight from "@/assets/wrestler-spotlight.jpg";
import medals from "@/assets/medals.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Farhad Nouri" },
      { name: "description", content: "Cinematic photo gallery from wrestling and fitness competitions." },
    ],
  }),
  component: Gallery,
});

type Photo = { src: string; alt: string; cat: "wrestling" | "fitness" };

const photos: Photo[] = [
  { src: heroMat, alt: "On the mat", cat: "wrestling" },
  { src: wrestlerSpotlight, alt: "Spotlight kneel", cat: "wrestling" },
  { src: action, alt: "In action", cat: "wrestling" },
  { src: portrait, alt: "Portrait", cat: "wrestling" },
  { src: fitnessHero, alt: "Gym session", cat: "fitness" },
  { src: medals, alt: "Medals", cat: "fitness" },
  { src: fitnessHero, alt: "Lifting heavy", cat: "fitness" },
  { src: heroMat, alt: "Tournament", cat: "wrestling" },
  { src: action, alt: "Hand raised", cat: "wrestling" },
  { src: fitnessHero, alt: "Conditioning", cat: "fitness" },
  { src: wrestlerSpotlight, alt: "Arena", cat: "wrestling" },
  { src: medals, alt: "Champion", cat: "fitness" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const wrestling = photos.filter((p) => p.cat === "wrestling");
  const fitness = photos.filter((p) => p.cat === "fitness");

  return (
    <div>
      <SiteNav />
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Visuals</p>
        <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">GALLERY</h1>
        <p className="mt-4 text-muted-foreground font-serif italic text-lg">Moments captured in motion.</p>
      </section>

      {[
        { title: "Wrestling", list: wrestling },
        { title: "Fitness", list: fitness },
      ].map((sec) => (
        <section key={sec.title} className="px-6 pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-6 mb-10">
              <h2 className="font-display text-3xl md:text-4xl">{sec.title.toUpperCase()}</h2>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{sec.list.length} photos</span>
            </div>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {sec.list.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(p)}
                  className="block w-full overflow-hidden group break-inside-avoid"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-foreground hover:text-accent"
            onClick={() => setLightbox(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
