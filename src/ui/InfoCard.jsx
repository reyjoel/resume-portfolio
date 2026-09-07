export function InfoCard({ title, children, className = "" }) {
  return (
    <div className={`border-t border-border pt-5 pb-3 ${className}`.trim()}>
      <div className="text-[13px] text-muted mb-3">{title}</div>
      <div>{children}</div>
    </div>
  )
}
