import { DATA } from '../data'
import { SectionHeader } from '../ui/SectionHeader'

export function Skills() {
  const groups = Object.entries(DATA.skills)
  return (
    <section id="skills" className="border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
        <SectionHeader
          eyebrow="03 / Skills"
          title="Technical skill set"
          blurb="Tools and frameworks I use day-to-day, organized by area."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map(([group, items], i) => (
            <div key={group} className="border border-border rounded-lg bg-white p-5 shadow-card flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[11px] font-mono text-muted uppercase tracking-[0.18em]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-[15px] font-semibold text-ink">{group}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {items.map((it, j) => (
                  <li key={j} className="text-[12.5px] text-ink2 bg-surface border border-border rounded px-2 py-0.5">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
