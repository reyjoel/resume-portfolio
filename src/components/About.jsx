import { DATA } from '../data'
import { SectionHeader } from '../ui/SectionHeader'
import { InfoCard } from '../ui/InfoCard'

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHeader
          eyebrow="About"
          title="A pragmatic engineer focused on what ships."
          blurb="Nine years across agencies and product teams, mostly backend, comfortable end-to-end."
        />
        <div className="grid grid-cols-12 gap-x-2 gap-y-10 md:gap-10">
          <div className="min-w-0 col-span-12 md:col-span-7 space-y-5 text-ink2 text-[16px] leading-relaxed">
            <p style={{ textWrap: 'pretty' }}>{DATA.longSummary}</p>
            <p style={{ textWrap: 'pretty' }}>
              I work day-to-day in PHP (Laravel), Node.js (Express, NestJS) and modern React/Next.js,
              with a strong focus on API design, query and caching strategy, and the boring-but-critical
              parts of running services in production: logging, indexing, deployments.
            </p>
          </div>
          <div className="min-w-0 col-span-12 md:col-span-5 grid grid-cols-2 gap-4">
            <InfoCard title="Education">
              {DATA.education.map((e, i) => (
                <div key={i}>
                  <div className="text-ink font-medium">{e.school}</div>
                  <div className="text-muted text-[13px] mt-0.5">{e.degree}</div>
                </div>
              ))}
            </InfoCard>
            <InfoCard title="Languages">
              <ul className="space-y-1">
                {DATA.languages.map((l, i) => (
                  <li key={i} className="text-ink text-[14px] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>{l}
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Certifications" className="col-span-2">
              {DATA.certifications.map((c, i) => (
                <a key={i} href={c.url} target="_blank" rel="noreferrer" className="block group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-ink font-medium group-hover:text-accent transition">{c.name}</div>
                      <div className="text-muted text-[13px] mt-0.5">{c.issuer}</div>
                    </div>
                    <span className="text-muted group-hover:text-accent transition">↗</span>
                  </div>
                </a>
              ))}
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  )
}
