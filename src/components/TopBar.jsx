import { DATA } from '../data'
import { useTime, formatPHTime } from '../hooks/useTime'

export function TopBar() {
  const now = useTime()
  return (
    <div className="border-b border-border bg-white sticky top-0 z-30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-ink text-white grid place-items-center font-semibold text-[13px] tracking-tight">
            {DATA.initials}
          </div>
          <div className="leading-tight">
            <div className="text-[14px] font-semibold text-ink">{DATA.name}</div>
            <div className="text-[11px] text-muted">{DATA.role}</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-ink2">
          <a href="#about" className="link-underline hover:text-ink">About</a>
          <a href="#experience" className="link-underline hover:text-ink">Experience</a>
          <a href="#skills" className="link-underline hover:text-ink">Skills</a>
          <a href="#projects" className="link-underline hover:text-ink">Projects</a>
          <a href="#contact" className="link-underline hover:text-ink">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-[12px] text-muted">
            <span className="dot bg-emerald-500"></span>
            <span>Available · Cebu {formatPHTime(now)}</span>
          </div>
          <a
            href={`mailto:${DATA.email}`}
            className="text-[13px] font-medium bg-ink text-white px-4 py-2 rounded-md hover:bg-ink2 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
