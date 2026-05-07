export default function IdeaCard({ idea, onRemove, canRemove }) {
  return (
    <article className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow transition">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-800">{idea.title}</h3>
        {canRemove && (
          <button
            onClick={() => onRemove(idea.id)}
            className="text-xs text-red-500 hover:text-red-700"
          >
            remove
          </button>
        )}
      </div>
      {idea.desc && <p className="text-sm text-slate-600 mt-1">{idea.desc}</p>}
      <p className="text-xs text-slate-400 mt-2">by {idea.author}</p>
    </article>
  );
}
