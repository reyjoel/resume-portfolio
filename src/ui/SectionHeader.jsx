export function SectionHeader({ eyebrow, title, blurb }) {
  return (
    <div className="grid grid-cols-12 gap-x-2 gap-y-6 md:gap-6 items-end mb-12 lg:mb-16">
      <div className="min-w-0 col-span-12 md:col-span-8">
        <div className="text-[13px] text-accent mb-2">{eyebrow}</div>
        <h2 className="text-4xl md:text-5xl font-normal text-ink tracking-tight">{title}</h2>
      </div>
      {blurb && (
        <p className="min-w-0 col-span-12 md:col-span-4 text-[15px] text-muted leading-relaxed">{blurb}</p>
      )}
    </div>
  )
}
