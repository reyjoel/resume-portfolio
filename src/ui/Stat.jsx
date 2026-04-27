export function Stat({ n, label }) {
  return (
    <div className="border border-border rounded-lg bg-white px-4 py-3 text-center shadow-card">
      <div className="text-2xl font-semibold text-ink num-tabular tracking-tight">{n}</div>
      <div className="text-[11px] text-muted uppercase tracking-[0.12em] mt-0.5">{label}</div>
    </div>
  )
}
