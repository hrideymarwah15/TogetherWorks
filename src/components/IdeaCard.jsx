export default function IdeaCard({ idea, onRemove, canRemove }) {
  return (
    <article className="bg-white border border-stone-200 rounded-lg p-4 shadow-sm hover:shadow-md transition dark:bg-slate-900 dark:border-slate-800">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-900 dark:text-white">{idea.title}</h3>
        {canRemove && (
          <button
            onClick={() => onRemove(idea.id)}
            className="text-xs font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            remove
          </button>
        )}
      </div>
      {idea.desc && <p className="text-sm text-slate-600 mt-2 dark:text-slate-300">{idea.desc}</p>}
      <p className="text-xs text-slate-500 mt-4 dark:text-slate-400">by {idea.author}</p>
    </article>
  );
}
