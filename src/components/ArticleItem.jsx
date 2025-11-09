export default function ArticleItem({ a, onTagClick }) {
  return (
    <li className="border border-slate-200 rounded-xl p-4 sm:p-5">
      <a className="font-medium link" href={a.link} target="_blank" rel="noopener noreferrer">{a.title}</a>
      {a.platform && <span className="ml-2 text-xs text-slate-500">• {a.platform}</span>}
      <p className="mt-2 text-sm text-slate-700">{a.summary}</p>
      {a.tags?.length && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {a.tags.map((t, i) => (
            <li 
              key={i} 
              onClick={() => onTagClick?.(t)}
              className={`text-xs bg-slate-100 px-3 py-1.5 rounded ${onTagClick ? 'cursor-pointer hover:bg-blue-100 hover:text-blue-600 active:bg-blue-200 touch-manipulation' : ''}`}
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

