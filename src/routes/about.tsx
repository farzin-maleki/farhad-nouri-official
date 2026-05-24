import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Farhad Nouri" },
      { name: "description", content: "The journey of Iranian wrestler Farhad Nouri — from Tehran's training halls to the international stage." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <SiteNav />
      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">About</p>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">My Story</h1>
          <p className="font-script text-3xl text-accent">From Tehran to the world</p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-5">
          <img src={portrait} alt="Farhad Nouri" width={1024} height={1024} loading="lazy" className="md:col-span-2 w-full aspect-[4/5] object-cover" />
          <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>I grew up in Iran with wrestling in my blood. In our country, the mat isn't just a sport — it's a school of character. The Pahlevan tradition teaches you to be strong, but humble. To win, but with honor.</p>
            <p>From my first practice as a child, I knew this was the path. Years of early mornings, brutal training camps, weight cuts, victories, and losses — all of it shaped me into the wrestler and the man I am today.</p>
            <p>Representing Iran on the international stage has been the honor of my life. Now, I'm focused on building the next chapter: coaching the next generation, sharing what the mat has taught me, and helping young athletes find their own strength.</p>
            <p className="font-serif italic text-foreground text-xl border-l-2 border-accent pl-6">"The greatest victory is the one you win over yourself."</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
