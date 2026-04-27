export function SectionHeader({ eyebrow, title, blurb }) {
  return (
    <div className="grid grid-cols-12 gap-6 items-end mb-10">
      <div className="col-span-12 md:col-span-8">
        <div className="text-[11px] font-mono text-accent uppercase tracking-[0.18em] mb-2">{eyebrow}</div>
        <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight">{title}</h2>
      </div>
      {blurb && (
        <p className="col-span-12 md:col-span-4 text-[14px] text-muted leading-relaxed">{blurb}</p>
      )}
    </div>
  )
}
