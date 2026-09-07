import { DATA } from '../data'
import { Row } from '../ui/Row'
import { Stat } from '../ui/Stat'

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 lg:pt-28 pb-20 lg:pb-28">
        <div className="grid grid-cols-12 gap-x-2 gap-y-10 md:gap-10 items-start">
          <div className="min-w-0 col-span-12 lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-[13px] text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Open to senior engineering roles
            </div>
            <h1 className="mt-6 text-[clamp(2.75rem,5.4vw,4.5rem)] leading-[1.04] tracking-[-0.035em] font-normal text-ink">
              Senior Full Stack Engineer building reliable, high-performance backends.
            </h1>
            <p className="mt-8 text-[16px] text-ink2 leading-relaxed max-w-2xl" style={{ textWrap: 'pretty' }}>
              {DATA.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="text-[14px] font-medium bg-accent text-white px-5 py-2.5 rounded-sm hover:bg-ink transition"
              >
                View experience
              </a>
              <a
                href={DATA.github}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium border border-border bg-bg text-ink px-5 py-2.5 rounded-sm hover:bg-surface transition inline-flex items-center gap-2"
              >
                <span>GitHub</span><span className="text-muted">↗</span>
              </a>
              <a
                href={`mailto:${DATA.email}`}
                className="text-[14px] font-medium text-ink2 px-2 py-2.5 hover:text-ink transition link-underline"
              >
                {DATA.email}
              </a>
            </div>
          </div>

          <aside className="min-w-0 col-span-12 lg:col-span-4">
            <div className="border-t border-ink">
              <dl className="divide-y divide-border text-[13px]">
                <Row k="Name"     v={DATA.name} />
                <Row k="Role"     v={DATA.role} />
                <Row k="Focus"    v={DATA.focus} />
                <Row k="Location" v={DATA.location} />
                <Row k="Email"    v={DATA.email}    href={`mailto:${DATA.email}`} />
                <Row k="Phone"    v={DATA.phone}    href={`tel:${DATA.phone.replace(/-/g, '')}`} />
                <Row k="GitHub"   v={"@" + DATA.githubHandle} href={DATA.github} />
                <Row k="LinkedIn" v="View profile" href={DATA.linkedin} />
              </dl>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <Stat n={DATA.yearsExp + "+"} label="Years" />
              <Stat n={String(DATA.experience.length)} label="Companies" />
              <Stat n={DATA.projects_length} label="Projects" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
