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
    <section className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-stone-200 pb-5 dark:border-slate-800">
        <div>
          <p className="text-sm font-semibold text-brand dark:text-brand-dark">
            Stage 1
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Dump ideas
          </h2>
          <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">
            Get the options out of everyone's head and onto the board.
          </p>
        </div>
        <span className="w-fit border border-stone-200 bg-white rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300">
          {ideas.length} {ideas.length === 1 ? "idea" : "ideas"}
        </span>
      </header>

      <form
        onSubmit={submit}
        className="bg-white border border-stone-200 rounded-lg p-4 sm:p-5 space-y-4 shadow-sm dark:bg-slate-900 dark:border-slate-800"
      >
        <label className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Idea title
          </span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Example: shared campus marketplace"
            className="mt-1 w-full border border-stone-300 bg-white rounded-lg px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 dark:bg-slate-950 dark:border-slate-700 dark:text-white"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Description
          </span>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="One-line description"
            rows={3}
            className="mt-1 w-full border border-stone-300 bg-white rounded-lg px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 dark:bg-slate-950 dark:border-slate-700 dark:text-white"
          />
        </label>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Posting as {currentMember}
          </span>
          <button
            type="submit"
            className="bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-800 transition dark:bg-brand-dark dark:text-slate-950 dark:hover:bg-teal-200"
          >
            Add idea
          </button>
        </div>
      </form>

      {ideas.length === 0 ? (
        <p className="text-center text-slate-500 bg-white border border-dashed border-stone-300 rounded-lg py-10 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400">
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
            className="bg-slate-950 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Done dumping → go vote
          </button>
        </div>
      )}
    </section>
  );
}
