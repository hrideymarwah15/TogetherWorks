import { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import IdeaCard from "../components/IdeaCard.jsx";

export default function Dump() {
  const { ideas, addIdea, removeIdea, currentMember, setStage } = useApp();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addIdea(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <section>
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Stage 1 · Dump</h2>
        <p className="text-slate-500 text-sm">
          Throw every project idea into the pool. Quantity over quality.
        </p>
      </header>

      <form
        onSubmit={submit}
        className="bg-white border border-slate-200 rounded-lg p-4 mb-8 space-y-3"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Idea title"
          className="w-full border border-slate-300 rounded px-3 py-2"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="One-line description (optional)"
          rows={2}
          className="w-full border border-slate-300 rounded px-3 py-2"
        />
        <div className="flex justify-between items-center">
          <span className="text-xs text-slate-400">Posting as {currentMember}</span>
          <button
            type="submit"
            className="bg-brand text-white px-4 py-2 rounded font-medium hover:opacity-90"
          >
            Add idea
          </button>
        </div>
      </form>

      {ideas.length === 0 ? (
        <p className="text-center text-slate-400 py-10">
          No ideas yet. Be the first to dump one.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {ideas.map((idea) => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              onRemove={removeIdea}
              canRemove={idea.author === currentMember}
            />
          ))}
        </div>
      )}

      {ideas.length >= 2 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setStage(2)}
            className="bg-slate-800 text-white px-5 py-2 rounded font-medium hover:bg-slate-700"
          >
            Done dumping → go vote
          </button>
        </div>
      )}
    </section>
  );
}
