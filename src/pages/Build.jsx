import TaskBoard from "../components/TaskBoard.jsx";
import { useApp } from "../context/AppContext.jsx";

export default function Build() {
  const { tasks, setStage } = useApp();
  const doneCount = tasks.filter((task) => task.status === "done").length;
  const progress = tasks.length === 0 ? 0 : Math.round((doneCount / tasks.length) * 100);
  const allDone = tasks.length > 0 && tasks.every((task) => task.status === "done");

  return (
    <section>
      <div className="mb-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="text-sm font-semibold text-slate-600">
            {progress}% done
          </span>
          <span className="text-xs text-slate-400">
            {doneCount} of {tasks.length} tasks complete
          </span>
        </div>
        <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
          <div
            className="h-full bg-brand transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <header className="mb-6">
        <h2 className="text-2xl font-bold">Stage 4 · Build</h2>
        <p className="text-slate-500 text-sm">
          Move tasks across the board as work begins, ships, and wraps up.
        </p>
      </header>

      {tasks.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
          <p className="text-slate-500">No tasks yet. Assign tasks before building.</p>
          <button
            onClick={() => setStage(3)}
            className="mt-4 text-brand font-medium text-sm hover:opacity-80"
          >
            Back to Stage 3
          </button>
        </div>
      ) : (
        <TaskBoard />
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => setStage(5)}
          disabled={!allDone}
          className={
            "px-5 py-2 rounded font-medium transition " +
            (allDone
              ? "bg-slate-800 text-white hover:bg-slate-700"
              : "bg-slate-200 text-slate-400 cursor-not-allowed")
          }
        >
          All done → go to Score
        </button>
      </div>
    </section>
  );
}
