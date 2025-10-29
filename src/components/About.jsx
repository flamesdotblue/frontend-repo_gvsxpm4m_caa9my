import { User, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          <p className="mt-3 text-slate-600">
            I’m a curious developer passionate about full‑stack web development, system design, and developer tools. I enjoy
            transforming ideas into clean, performant code.
          </p>
          <div className="mt-6 space-y-3 text-slate-700">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-indigo-600" /> B.Tech in Computer Science, 2021–2025
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-indigo-600" /> Bengaluru, India
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Core Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Python", "FastAPI", "Tailwind", "Git"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-slate-900">Education</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>XYZ Institute of Technology — B.Tech CSE (CGPA: 8.6/10)</li>
              <li>Relevant Coursework: DSA, DBMS, Operating Systems, Computer Networks, Web Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
