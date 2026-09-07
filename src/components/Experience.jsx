import { DATA } from '../data'
import { SectionHeader } from '../ui/SectionHeader'

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHeader
          eyebrow="Experience"
          title="Selected professional experience"
        />
        <ol className="relative border-l border-border ml-1">
          {DATA.experience.map((job, i) => (
            <li key={i} className="relative pl-6 md:pl-10 pb-12 last:pb-0">
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-bg border border-muted"></span>
              <div className={`pb-8 border-border ${i === DATA.experience.length - 1 ? '' : 'border-b'}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-ink tracking-tight">{job.company}</h3>
                    <div className="text-ink2 text-[14px] mt-0.5">{job.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[12px] text-ink2">{job.period}</div>
                    <div className="text-[12px] text-muted mt-0.5">{job.location}</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-[16px] text-ink2 leading-relaxed">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"></span>
                      <span style={{ textWrap: 'pretty' }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-list">
                  {job.stack.map((s, j) => (
                    <span key={j} className="text-[13px] text-muted">{s}</span>
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
