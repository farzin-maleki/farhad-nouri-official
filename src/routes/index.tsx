import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import heroMat from "@/assets/hero-mat.jpg";
import portrait from "@/assets/portrait.jpg";
import action from "@/assets/action.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farhad Nouri — Iranian Wrestler" },
      { name: "description", content: "Strength, discipline, legacy. The official site of Iranian wrestler Farhad Nouri." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroMat} alt="Wrestler standing on the mat" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-script text-6xl md:text-8xl text-accent drop-shadow-lg">Pahlevani</h1>
          <p className="mt-4 text-xl md:text-2xl font-serif italic">I rise with honor</p>
          <p className="mt-3 text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground">Forged on the mat. Carried by tradition.</p>
          <a href="#story" className="absolute bottom-12 animate-bounce text-accent">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* PRESS STRIP */}
      <section className="border-y border-border bg-card py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">As featured by</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-muted-foreground/80 font-serif text-lg">
            <span>United World Wrestling</span>
            <span>·</span>
            <span>IRIB Sport</span>
            <span>·</span>
            <span>Tehran Times</span>
            <span>·</span>
            <span>FloWrestling</span>
            <span>·</span>
            <span>Varzesh3</span>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-28 px-6">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 items-center">
          <div className="relative">
            <img src={portrait} alt="Farhad Nouri portrait" width={1024} height={1024} loading="lazy" className="w-full object-cover aspect-[4/5]" />
            <div className="absolute -bottom-4 -right-4 border border-accent p-4 bg-background hidden md:block">
              <p className="font-script text-2xl text-accent">Farhad Nouri</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">The Athlete</p>
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Farhad Nouri</h2>
            <p className="text-xl font-serif italic text-muted-foreground mb-6">National Champion. Freestyle Wrestler. Mentor.</p>
            <p className="text-lg leading-relaxed mb-4">
              From the wrestling halls of Iran to international podiums, the mat has shaped every part of who I am.
            </p>
            <p className="leading-relaxed text-muted-foreground mb-8">
              After years of training, competing, and representing my country, I'm now focused on passing down what I've learned — on the mat and beyond. Through private coaching, team clinics, and speaking, I aim to create space for growth, discipline, and lasting impact.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-accent border-b border-accent pb-1 hover:gap-4 transition-all">
              My Story <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-10 text-sm text-muted-foreground"><span className="text-accent font-medium">Fun fact:</span> I drink chai before every match — tradition included.</p>
          </div>
        </div>
      </section>

      {/* WORK WITH ME */}
      <section className="bg-card py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Work With Me</p>
              <h2 className="text-5xl md:text-6xl font-serif">What I offer</h2>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-colors">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {[
              { title: "Private Training", to: "/training", desc: "One-on-one coaching tailored to your level. Technique, conditioning, mindset, and competition strategy." },
              { title: "Wrestling Clinics", to: "/clinics", desc: "I work with teams and clubs — drilling, live wrestling, and Q&A. For schools and programs chasing an edge." },
              { title: "Speaking", to: "/speaking", desc: "From student-athletes to corporate teams: resilience, pressure, identity, and chasing big goals." },
            ].map((s) => (
              <Link key={s.title} to={s.to} className="group bg-background p-10 hover:bg-secondary transition-colors">
                <h3 className="text-2xl font-serif mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-[0.2em]">
                  Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 text-center">Athlete Bio</p>
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-16">By the numbers</h2>
          <div className="grid gap-12 md:grid-cols-4 text-center">
            {[
              { label: "Weight Class", value: "86 kg" },
              { label: "Hometown", value: "Tehran, Iran" },
              { label: "Style", value: "Freestyle" },
              { label: "Training Base", value: "Tehran" },
            ].map((b) => (
              <div key={b.label}>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">{b.label}</p>
                <p className="text-3xl font-serif">{b.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-serif mb-6 text-accent">Career Highlights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>— Multiple-time Iranian National Champion</li>
                <li>— International medalist on the freestyle circuit</li>
                <li>— Member of Team Melli (Iran National Team)</li>
                <li>— Continental tournament podium finisher</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6 text-accent">Philosophy</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>— Pahlevani values: humility, courage, and honor</li>
                <li>— Daily discipline over occasional intensity</li>
                <li>— The mat reveals who you really are</li>
                <li>— Mentor the next generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IN ACTION */}
      <section className="bg-card py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 text-center">In Action</p>
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-16">Performance Highlights</h2>
          <a href="#" className="block relative group overflow-hidden">
            <img src={action} alt="Farhad Nouri in competition" width={1600} height={900} loading="lazy" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors flex items-center justify-center">
              <div className="h-20 w-20 rounded-full border-2 border-accent bg-background/40 backdrop-blur-sm flex items-center justify-center">
                <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-accent" />
              </div>
            </div>
          </a>
          <p className="text-center mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">Match reel — coming soon</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
