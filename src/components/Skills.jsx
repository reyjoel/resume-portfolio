import { DATA } from '../data'
import { SectionHeader } from '../ui/SectionHeader'

export function Skills() {
  const groups = Object.entries(DATA.skills)
  return (
    <section id="skills" className="border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHeader
          eyebrow="Skills"
          title="Technical skill set"
          blurb="Tools and frameworks I use day-to-day, organized by area."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {groups.map(([group, items]) => (
            <div key={group} className="border-t border-border pt-5 flex flex-col">
              <div className="mb-3">
                <h3 className="text-[16px] font-medium text-ink">{group}</h3>
              </div>
              <ul className="flex flex-wrap gap-x-2 gap-y-1 text-list">
                {items.map((it, j) => (
                  <li key={j} className="text-[14px] text-muted">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
