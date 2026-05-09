import TaskBoard from "../components/TaskBoard.jsx";
import { useApp } from "../context/AppContext.jsx";

export default function Build() {
  const { tasks, setStage } = useApp();
  const doneCount = tasks.filter((task) => task.status === "done").length;
  const progress =
    tasks.length === 0 ? 0 : Math.round((doneCount / tasks.length) * 100);
  const allDone = tasks.length > 0 && tasks.every((task) => task.status === "done");

  return (
    <section className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-stone-200 pb-5 dark:border-slate-800">
        <div>
          <p className="text-sm font-semibold text-brand dark:text-brand-dark">
            Stage 4
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Build
          </h2>
          <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">
            Move tasks across the board as work begins, ships, and wraps up.
          </p>
        </div>
        <span className="w-fit border border-stone-200 bg-white rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300">
          {progress}% done
        </span>
      </header>

      {tasks.length > 0 && (
        <div className="bg-white border border-stone-200 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          <div>
            <p className="text-xs font-semibold uppercase text-brand dark:text-brand-dark">
              Progress
            </p>
            <h3 className="font-semibold text-slate-950 mt-1 dark:text-white">
              {doneCount} of {tasks.length} tasks complete
            </h3>
          </div>
          <progress
            value={doneCount}
            max={tasks.length}
            className="w-full sm:w-56 h-2 accent-brand dark:accent-brand-dark"
          />
        </div>
      )}

      {tasks.length === 0 ? (
        <div className="text-center text-slate-500 bg-white border border-dashed border-stone-300 rounded-lg py-10 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400">
          <p>No tasks yet. Assign tasks before building.</p>
          <button
            onClick={() => setStage(3)}
            className="mt-4 text-brand font-medium hover:text-teal-800 dark:text-brand-dark dark:hover:text-teal-200"
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
            "px-5 py-2.5 rounded-lg font-medium transition " +
            (allDone
              ? "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              : "bg-stone-200 text-slate-400 cursor-not-allowed dark:bg-slate-900 dark:text-slate-600")
          }
        >
          All done → go to Score
        </button>
      </div>
    </section>
  );
}
