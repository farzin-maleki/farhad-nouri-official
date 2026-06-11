import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import kidPic from "@/assets/gallery/WhatsApp Image 2026-05-29 at 15.03.06.jpeg";
import portrait from "@/assets/hero-mat.jpg";
import fitnessHero from "@/assets/hero-mat.jpg";
import wrestlerSpotlight from "@/assets/gallery/image_2026-05-27_13-54-58.png";
import teenPic from "@/assets/gallery/teenager.jpeg";
import worldCup from "@/assets/gallery/worldcup.jpeg";
import today from "@/assets/gallery/today.jpeg";
import javanan from "@/assets/gallery/javanan.jpeg";
import asiaii from "@/assets/gallery/asiaii.jpeg";
import European from "@/assets/gallery/arm-raised.jpg";

const timeline = [
  {
    year: "2008",
    title: "First Steps on the Mat",
    text: "At 12 years old, started wrestling under the guidance of my brother in Nasim Shahr, southern Tehran. The mat became home.",
    img: kidPic,
  },
  {
    year: "2012",
    title: "National Youth Champion",
    text: "Won the Iran Youth Championship in Tehran — the first national title that proved the dream was real.",
    img: teenPic,
  },
  {
    year: "2016",
    title: "National Junior Champion",
    text: "Claimed the Iran Junior Championship in Tehran, cementing a place among the country's elite young wrestlers.",
    img: javanan,
  },
  {
    year: "2019",
    title: "National Senior Champion",
    text: "Won the Iran Senior Championship in Kermanshah — the pinnacle of domestic competition. Also earned a runner-up finish with Azad University at the World Club Championships, held in Kermanshah.",
    img: asiaii,
  },
  {
    year: "2020",
    title: "World Club Championships — Bronze",
    text: "Represented Setaregan Sari at the World Club Championships in Sari, bringing home a bronze medal.",
    img: worldCup,
  },
  {
    year: "2022",
    title: "Takhti Cup Silver",
    text: "Competed at the prestigious Takhti Cup in Tehran, finishing with a silver medal on the international stage.",
  },
  {
    year: "2026",
    title: "European Senior Championship",
    text: "Stepped onto the European stage and earned a bronze medal, competing against the continent's elite senior wrestlers.",
    img: European,
  },
  {
    year: "Today",
    title: "Building a Legacy",
    text: "Still competing. Still pushing limits. Bridging the world of wrestling with fitness and inspiring the next generation — every single day.",
    img: today,
  },
];

export default function LifeStory() {
  return (
    <div>
      <SiteNav />
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <img
          src={wrestlerSpotlight}
          alt="Farhad Nouri spotlight"
          width={1080}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6 animate-fade-in">
            My Journey
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-gradient-gold animate-fade-up">
            LIFE STORY
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground font-serif italic text-lg animate-fade-up">
            A boy. A mat. A relentless will to rise.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I was born in a country where wrestling isn't just sport — it's
            heritage. The Pahlevan tradition teaches strength with humility,
            victory with honor. From my first practice as a child, I knew this
            was the path.
          </p>
          <p>
            What followed was years of early mornings, brutal training camps,
            weight cuts, podiums, and heartbreaks. Every loss became a lesson.
            Every win became fuel.
          </p>
          <p className="font-serif italic text-foreground text-xl border-l-2 border-accent pl-6">
            "The mat doesn't lie. It will show you exactly who you are."
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/30">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent text-center mb-4">
            Milestones
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-20">
            THE TIMELINE
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                    i % 2 === 0 ? "" : "md:[direction:rtl]"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-accent ring-4 ring-background" />
                  <div className="pl-12 md:pl-0 md:[direction:ltr] md:text-right md:pr-12">
                    <p className="font-display text-5xl text-gradient-gold mb-2">
                      {item.year}
                    </p>
                    <h3 className="font-display text-2xl mb-3">
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                  <div className="pl-12 md:pl-12 md:[direction:ltr] mt-6 md:mt-0">
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.title}
                        width={800}
                        height={1000}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] min-h-[400px] overflow-hidden my-16">
        <img
          src={fitnessHero}
          alt="Training"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background/10" />
        <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              The Mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              EVERY DAY. NO EXCEPTIONS.
            </h2>
            <p className="text-muted-foreground text-lg">
              Discipline is the bridge between dreams and results. I built mine
              one brick at a time — and I help others build theirs.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
