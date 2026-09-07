export function Stat({ n, label }) {
  return (
    <div className="border-t border-border pt-5 pb-2">
      <div className="text-4xl font-sans font-normal text-ink num-tabular tracking-tight">{n}</div>
      <div className="text-[12px] text-muted mt-0.5">{label}</div>
    </div>
  )
}
