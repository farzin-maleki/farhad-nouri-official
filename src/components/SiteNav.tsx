import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md py-3" : "py-6"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8 text-sm tracking-[0.2em] uppercase">
          <Link to="/" className="hover:text-accent transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }}>Home</Link>
          <Link to="/about" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>About</Link>
          <Link to="/contact" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Contact</Link>
        </div>
        <div className="font-script text-2xl text-accent hidden md:block">Farhad Nouri</div>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-[0.2em] uppercase">
          <Link to="/training" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Training</Link>
          <Link to="/clinics" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Clinics</Link>
          <Link to="/speaking" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Speaking</Link>
        </div>
      </nav>
    </header>
  );
}
