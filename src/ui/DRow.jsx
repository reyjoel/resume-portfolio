export function DRow({ k, v, href }) {
  const inner = (
    <div className="grid grid-cols-3 py-3 group">
      <dt className="text-white/55">{k}</dt>
      <dd className="col-span-2 flex items-center justify-between gap-3">
        <span className="text-white truncate">{v}</span>
        {href && (
          <span className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition">
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
