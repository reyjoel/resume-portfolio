export function Row({ k, v, href }) {
  return (
    <div className="grid grid-cols-3 py-3">
      <dt className="text-muted">{k}</dt>
      <dd className="col-span-2 min-w-0 text-ink break-words">
        {href ? (
          <a
            className="hover:text-accent link-underline"
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            {v}
          </a>
        ) : v}
      </dd>
    </div>
  )
}
