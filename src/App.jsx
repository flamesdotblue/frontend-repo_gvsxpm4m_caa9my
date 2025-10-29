import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Navbar() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handler = (e) => {
      const target = e.target;
      if (target instanceof HTMLAnchorElement && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const el = id ? document.getElementById(id) : null;
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-slate-900">
          Aarav<span className="text-indigo-600">.dev</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-600">
          © {new Date().getFullYear()} Aarav Sharma. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
