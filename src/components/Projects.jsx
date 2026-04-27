import { DATA } from '../data'
import { SectionHeader } from '../ui/SectionHeader'

export function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
        <SectionHeader
          eyebrow="04 / Projects"
          title="Selected live projects"
          blurb="Production platforms shipped across lead-gen, recruitment, real-estate tech, and agency tooling."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATA.projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group border border-border rounded-xl bg-white p-6 shadow-card hover:border-accent hover:shadow-md transition flex items-start justify-between gap-4"
            >
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-muted uppercase tracking-[0.16em]">
                  {String(i + 1).padStart(2, '0')} · {p.tag}
                </div>
                <div className="mt-2 text-lg font-semibold text-ink tracking-tight group-hover:text-accent transition">{p.name}</div>
                <div className="mt-1 text-[13px] text-muted truncate">{p.url.replace(/^https?:\/\//, '')}</div>
              </div>
              <div className="shrink-0 w-9 h-9 rounded-md border border-border bg-surface grid place-items-center text-muted group-hover:bg-accent group-hover:text-white group-hover:border-accent transition">
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
