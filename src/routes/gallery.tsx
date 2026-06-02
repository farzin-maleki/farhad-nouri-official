import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import zagrebMat from "@/assets/gallery/zagreb-mat.png";
import zagrebWin from "@/assets/gallery/zagreb-win.png";
import mirror from "@/assets/gallery/WhatsApp Image 2026-05-29 at 09.12.19ss.jpeg";
import blueWin from "@/assets/gallery/blue-win-ukraine.jpg";
import diploma from "@/assets/gallery/euro-diploma.jpg";
import redFist from "@/assets/gallery/red-fist.jpg";
import tirana from "@/assets/gallery/tirana-win.jpg";
import armRaised from "@/assets/gallery/arm-raised.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Farhad Nouri" },
      {
        name: "description",
        content: "Cinematic photo gallery from wrestling and fitness competitions.",
      },
    ],
  }),
  component: Gallery,
});

type Photo = { src: string; alt: string; cat: "wrestling" | "fitness" };

const photos: Photo[] = [
  { src: zagrebMat, alt: "Zagreb Open — on the mat", cat: "wrestling" },
  { src: zagrebWin, alt: "Zagreb 2026 — 10-0 win vs CAN", cat: "wrestling" },
  { src: redFist, alt: "Red singlet, fist clenched", cat: "wrestling" },
  { src: armRaised, alt: "Arm raised in victory", cat: "wrestling" },
  { src: tirana, alt: "Tirana European Championships", cat: "wrestling" },
  { src: blueWin, alt: "Win over Ukraine — blue singlet", cat: "wrestling" },
  { src: diploma, alt: "European Championships bronze — Tirana '26", cat: "wrestling" },
  { src: mirror, alt: "Physique check", cat: "fitness" },
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
        <p className="mt-4 text-muted-foreground font-serif italic text-lg">
          Moments captured in motion.
        </p>
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
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {sec.list.length} photos
              </span>
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
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
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
