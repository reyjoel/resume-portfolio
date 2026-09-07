import { DATA } from '../data'
import { SectionHeader } from '../ui/SectionHeader'

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHeader
          eyebrow="Projects"
          title="Selected live projects"
          blurb="Production platforms shipped across lead-gen, recruitment, real-estate tech, and agency tooling."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {DATA.projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group border-t border-border py-7 hover:border-accent transition-colors flex items-start justify-between gap-4"
            >
              <div className="min-w-0">
                <div className="text-[12px] text-muted">
                  {p.tag}
                </div>
                <div className="mt-2 text-2xl font-sans font-normal text-ink tracking-tight group-hover:text-accent transition">{p.name}</div>
                <div className="mt-1 text-[13px] text-muted truncate">{p.url.replace(/^https?:\/\//, '')}</div>
              </div>
              <div className="shrink-0 text-2xl text-muted group-hover:text-accent transition-colors">
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
