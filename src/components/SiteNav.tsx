import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/life-story", label: "Life Story" },
  { to: "/achievements", label: "Achievements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Videos" },
  { to: "/book", label: "Book a Session" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md py-3 border-b border-border"
          : "py-6 bg-gradient-to-b from-background/60 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <NavLink to="/" className="font-display text-2xl tracking-widest text-gradient-gold">
          FARHAD<span className="text-foreground">.NOURI</span>
        </NavLink>
        <div className="hidden lg:flex items-center gap-7 text-xs font-display tracking-[0.25em] uppercase">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `hover:text-accent transition-colors ${isActive ? "text-accent" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4 font-display tracking-[0.25em] uppercase text-sm">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 hover:text-accent transition-colors ${isActive ? "text-accent" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
