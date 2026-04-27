export function InfoCard({ title, children, className = "" }) {
  return (
    <div className={`border border-border rounded-lg bg-white p-5 shadow-card ${className}`.trim()}>
      <div className="text-[11px] font-mono text-muted uppercase tracking-[0.18em] mb-3">{title}</div>
      <div>{children}</div>
    </div>
  )
}
