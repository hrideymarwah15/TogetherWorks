import VoteCard from "../components/VoteCard.jsx";
import { useApp } from "../context/AppContext.jsx";

export default function Vote() {
  const { ideas, finalizeWinner, setStage } = useApp();

  return (
    <section className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-stone-200 pb-5 dark:border-slate-800">
        <div>
          <p className="text-sm font-semibold text-brand dark:text-brand-dark">
            Stage 2
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Vote
          </h2>
          <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">
            Choose the strongest idea before the team starts assigning work.
          </p>
        </div>
        <span className="w-fit border border-stone-200 bg-white rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300">
          {ideas.length} {ideas.length === 1 ? "option" : "options"}
        </span>
      </header>

      {ideas.length === 0 ? (
        <div className="text-center text-slate-500 bg-white border border-dashed border-stone-300 rounded-lg py-10 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400">
          <p>No ideas yet. Add ideas before voting.</p>
          <button
            onClick={() => setStage(1)}
            className="mt-4 text-brand font-medium hover:text-teal-800 dark:text-brand-dark dark:hover:text-teal-200"
          >
            Back to Stage 1
          </button>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            {ideas.map((idea) => (
              <VoteCard key={idea.id} idea={idea} />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={finalizeWinner}
              className="bg-slate-950 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Finalize winner → go to Assign
            </button>
          </div>
        </>
      )}
    </section>
  );
}
