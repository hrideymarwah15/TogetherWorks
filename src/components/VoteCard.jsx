import { useApp } from "../context/AppContext.jsx";

export default function VoteCard({ idea }) {
  const { votes, currentMember, toggleVote } = useApp();
  const ideaVotes = votes[idea.id] || [];
  const hasVoted = ideaVotes.includes(currentMember);

  return (
    <article className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-800">{idea.title}</h3>
          {idea.desc && <p className="text-sm text-slate-600 mt-1">{idea.desc}</p>}
        </div>
        <span className="text-sm font-semibold text-brand whitespace-nowrap">
          {ideaVotes.length} {ideaVotes.length === 1 ? "vote" : "votes"}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 mt-4">
        <p className="text-xs text-slate-400">by {idea.author}</p>
        <button
          onClick={() => toggleVote(idea.id)}
          className={
            "px-4 py-2 rounded font-medium text-sm transition " +
            (hasVoted
              ? "bg-brand text-white hover:opacity-90"
              : "border border-slate-300 text-slate-700 hover:bg-slate-50")
          }
        >
          {hasVoted ? "Voted ✓" : "Vote"}
        </button>
      </div>
    </article>
  );
}
