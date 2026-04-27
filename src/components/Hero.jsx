import { DATA } from '../data'
import { Row } from '../ui/Row'
import { Stat } from '../ui/Stat'

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16 lg:pb-20">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium text-accent bg-accent-soft border border-accent-soft/60 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Open to senior engineering roles
            </div>
            <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.05] tracking-tight font-semibold text-ink">
              Senior Full Stack Engineer building reliable, high-performance backends.
            </h1>
            <p className="mt-6 text-lg text-ink2 leading-relaxed max-w-2xl" style={{ textWrap: 'pretty' }}>
              {DATA.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="text-[14px] font-medium bg-ink text-white px-5 py-2.5 rounded-md hover:bg-ink2 transition"
              >
                View experience
              </a>
              <a
                href={DATA.github}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium border border-border bg-white text-ink px-5 py-2.5 rounded-md hover:bg-surface transition inline-flex items-center gap-2"
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

          <aside className="col-span-12 lg:col-span-4">
            <div className="border border-border rounded-xl bg-white shadow-card overflow-hidden">
              <div className="px-5 py-3 bg-surface border-b border-border flex items-center justify-between">
                <div className="text-[11px] font-mono text-muted uppercase tracking-[0.14em]">Profile</div>
                <div className="text-[11px] font-mono text-subtle">v.2026</div>
              </div>
              <dl className="divide-y divide-border text-[13px]">
                <Row k="Name"     v={DATA.name} />
                <Row k="Role"     v={DATA.role} />
                <Row k="Focus"    v={DATA.focus} />
                <Row k="Location" v={DATA.location} />
                <Row k="Email"    v={DATA.email}    href={`mailto:${DATA.email}`} />
                <Row k="Phone"    v={DATA.phone}    href={`tel:${DATA.phone.replace(/-/g, '')}`} />
                <Row k="GitHub"   v={"@" + DATA.githubHandle} href={DATA.github} />
              </dl>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Stat n={DATA.yearsExp + "+"} label="Years" />
              <Stat n="5" label="Companies" />
              <Stat n="8" label="Projects" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
