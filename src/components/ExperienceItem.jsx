export default function ExperienceItem({ exp, onTagClick }) {
  return (
    <li className="relative border border-slate-200 rounded-xl p-4 sm:p-5 animate-fade">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
        <h3 className="text-lg font-semibold">{exp.company}</h3>
        <span className="text-sm text-slate-500">{exp.duration}</span>
      </div>
      <div className="space-y-6 border-l-2 border-slate-200 pl-4 ml-2">
        {exp.roles.map((role, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h4 className="font-medium">{role.title}</h4>
              <span className="text-xs text-slate-500">{role.duration}</span>
            </div>
            {role.bullets?.length ? (
              <ul className="mt-2 text-sm text-slate-700 leading-6 list-disc list-inside space-y-1">
                {role.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            ) : role.description ? (
              <p className="mt-2 text-sm text-slate-700 leading-6">{role.description}</p>
            ) : null}
            {role.tags?.length && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {role.tags.map((t, i) => (
                  <li key={i} onClick={() => onTagClick(t)} className="text-xs bg-slate-100 px-3 py-1.5 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 active:bg-blue-200 touch-manipulation">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </li>
  )
}
