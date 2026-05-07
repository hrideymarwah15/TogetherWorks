import VoteCard from "../components/VoteCard.jsx";
import { useApp } from "../context/AppContext.jsx";

export default function Vote() {
  const { ideas, finalizeWinner, setStage } = useApp();

  return (
    <section>
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Stage 2 · Vote</h2>
        <p className="text-slate-500 text-sm">
          Pick the project idea your team should build next.
        </p>
      </header>

      {ideas.length === 0 ? (
        <div className="text-center text-slate-400 py-10">
          <p>No ideas yet. Add ideas before voting.</p>
          <button
            onClick={() => setStage(1)}
            className="mt-4 text-brand font-medium hover:opacity-80"
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
              className="bg-slate-800 text-white px-5 py-2 rounded font-medium hover:bg-slate-700"
            >
              Finalize winner → go to Assign
            </button>
          </div>
        </>
      )}
    </section>
  );
}
