export function DRow({ k, v, href }) {
  const inner = (
    <div className="grid grid-cols-3 py-3 group">
      <dt className="text-muted">{k}</dt>
      <dd className="col-span-2 min-w-0 flex items-center justify-between gap-3">
        <span className="text-ink break-words min-w-0">{v}</span>
        {href && (
          <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition">
            ↗
          </span>
        )}
      </dd>
    </div>
  )
  return href ? (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
    >
      {inner}
    </a>
  ) : inner
}
