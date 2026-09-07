import { DATA } from '../data'
import { useTime, formatPHTime } from '../hooks/useTime'

export function TopBar() {
  const now = useTime()
  return (
    <div className="border-b border-border bg-bg sticky top-0 z-30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 min-h-20 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="hidden sm:grid w-9 h-9 border border-ink text-ink place-items-center font-sans text-xl">
            {DATA.initials}
          </div>
          <div className="leading-tight">
            <div className="text-[14px] font-semibold text-ink">{DATA.name}</div>
            <div className="text-[11px] text-muted">{DATA.role}</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-5 text-[13px] text-ink2">
          <a href="#about" className="link-underline hover:text-ink">About</a>
          <a href="#experience" className="link-underline hover:text-ink">Experience</a>
          <a href="#skills" className="link-underline hover:text-ink">Skills</a>
          <a href="#projects" className="link-underline hover:text-ink">Projects</a>
          <a href="#contact" className="link-underline hover:text-ink">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 text-[12px] text-muted">
            <span className="dot bg-accent"></span>
            <span>Available · Cebu {formatPHTime(now)}</span>
          </div>
          <a
            href={`mailto:${DATA.email}`}
            className="text-[13px] font-medium text-accent border-b border-accent py-1 hover:text-ink transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
