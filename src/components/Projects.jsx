import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "CampusConnect",
    description:
      "A community platform for students to share notes, events, and study groups with real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    repo: "https://github.com/username/campus-connect",
    demo: "https://example.com/campus-connect",
  },
  {
    title: "Placement Tracker",
    description: "Track job applications, interview rounds, and outcomes with insightful analytics.",
    tags: ["Vite", "FastAPI", "PostgreSQL", "Tailwind"],
    repo: "https://github.com/username/placement-tracker",
    demo: "https://example.com/placement-tracker",
  },
  {
    title: "SmartNotes AI",
    description: "Summarize lectures, extract action items, and organize notes using NLP.",
    tags: ["Python", "FastAPI", "NLP", "OpenAI"],
    repo: "https://github.com/username/smartnotes-ai",
    demo: "https://example.com/smartnotes-ai",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
        <Star className="h-5 w-5 text-amber-500" />
      </div>
      <p className="mt-2 text-slate-600">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <Github className="h-4 w-4" /> Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          <ExternalLink className="h-4 w-4" /> Live
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <p className="mt-2 text-slate-600">A selection of work I’m proud of.</p>
          </div>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-sm font-medium text-indigo-700 hover:underline sm:inline-flex"
          >
            <Github className="h-4 w-4" /> Explore all
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
