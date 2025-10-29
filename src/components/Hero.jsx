import { Github, Linkedin, Mail, Download, Code } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              <Code className="mr-2 h-4 w-4" /> B.Tech Portfolio
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Hi, I’m <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Aarav Sharma</span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Final-year B.Tech student specializing in Computer Science. I love building scalable web apps, crafting delightful UIs, and solving real-world problems with code.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-600">
              <a href="mailto:aarav@example.com" className="inline-flex items-center gap-2 hover:text-slate-900">
                <Mail className="h-5 w-5" /> aarav@example.com
              </a>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-4">
                <a href="https://github.com/username" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full max-w-sm sm:mt-0">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
