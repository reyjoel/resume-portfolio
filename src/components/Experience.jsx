import { DATA } from '../data'
import { SectionHeader } from '../ui/SectionHeader'

export function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
        <SectionHeader
          eyebrow="02 / Experience"
          title="Selected professional experience"
          blurb="Most recent first. Click company links for live work in the Projects section below."
        />
        <ol className="relative border-l border-border ml-2">
          {DATA.experience.map((job, i) => (
            <li key={i} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-accent"></span>
              <div className="bg-white border border-border rounded-xl shadow-card p-6 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-ink tracking-tight">{job.company}</h3>
                    <div className="text-ink2 text-[14px] mt-0.5">{job.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[12px] font-mono text-ink2">{job.period}</div>
                    <div className="text-[12px] text-muted mt-0.5">{job.location}</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-[14.5px] text-ink2 leading-relaxed">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"></span>
                      <span style={{ textWrap: 'pretty' }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-border flex flex-wrap gap-2">
                  {job.stack.map((s, j) => (
                    <span key={j} className="text-[12px] font-mono text-ink2 bg-surface2 border border-border rounded px-2 py-0.5">{s}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
