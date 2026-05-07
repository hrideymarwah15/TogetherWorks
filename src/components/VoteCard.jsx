import { useApp } from "../context/AppContext.jsx";

export default function VoteCard({ idea }) {
  const { votes, currentMember, toggleVote } = useApp();
  const ideaVotes = votes[idea.id] || [];
  const hasVoted = ideaVotes.includes(currentMember);

  return (
    <article className="bg-white border border-stone-200 rounded-lg p-4 shadow-sm hover:shadow-md transition dark:bg-slate-900 dark:border-slate-800">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">{idea.title}</h3>
          {idea.desc && <p className="text-sm text-slate-600 mt-2 dark:text-slate-300">{idea.desc}</p>}
        </div>
        <span className="text-sm font-semibold text-brand whitespace-nowrap bg-teal-50 border border-teal-100 rounded px-2 py-1 dark:bg-teal-950/50 dark:border-teal-900 dark:text-brand-dark">
          {ideaVotes.length} {ideaVotes.length === 1 ? "vote" : "votes"}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 mt-4">
        <p className="text-xs text-slate-500 dark:text-slate-400">by {idea.author}</p>
        <button
          onClick={() => toggleVote(idea.id)}
          className={
            "px-4 py-2 rounded-lg font-medium text-sm transition " +
            (hasVoted
              ? "bg-brand text-white hover:bg-teal-800 dark:bg-brand-dark dark:text-slate-950 dark:hover:bg-teal-200"
              : "border border-stone-300 text-slate-700 hover:bg-stone-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800")
          }
        >
          {hasVoted ? "Voted ✓" : "Vote"}
        </button>
      </div>
    </article>
  );
}
