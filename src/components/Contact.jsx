import { DATA } from '../data'
import { useTime, formatPHTime } from '../hooks/useTime'
import { DRow } from '../ui/DRow'

export function Contact() {
  const now = useTime()
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 md:col-span-7">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/60 mb-3">05 / Contact</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Let's discuss your next backend or full-stack role.
            </h2>
            <p className="mt-5 text-white/70 max-w-xl leading-relaxed" style={{ textWrap: 'pretty' }}>
              I'm currently open to senior engineering opportunities — full-time or contract, remote-friendly.
              Best reached by email; I usually reply within a working day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${DATA.email}`}
                className="text-[14px] font-medium bg-white text-ink px-5 py-2.5 rounded-md hover:bg-surface transition"
              >
                Email me
              </a>
              <a
                href={DATA.github}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium border border-white/20 px-5 py-2.5 rounded-md hover:bg-white/10 transition inline-flex items-center gap-2"
              >
                <span>GitHub</span><span className="opacity-60">↗</span>
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="border border-white/15 rounded-xl bg-white/[0.04] backdrop-blur p-6">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/60 mb-4">Direct lines</div>
              <dl className="divide-y divide-white/10 text-[14px]">
                <DRow k="Email"      v={DATA.email}                    href={`mailto:${DATA.email}`} />
                <DRow k="Phone"      v={DATA.phone}                    href={`tel:${DATA.phone.replace(/-/g, '')}`} />
                <DRow k="GitHub"     v={"@" + DATA.githubHandle}       href={DATA.github} />
                <DRow k="Location"   v={DATA.location} />
                <DRow k="Local time" v={formatPHTime(now) + " · GMT+8"} />
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[12px] text-white/55">
          <div>© {new Date().getFullYear()} {DATA.name}</div>
          <div className="flex items-center gap-4">
            <span>Built with React + Tailwind CSS</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">{DATA.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
