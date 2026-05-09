import { useApp } from "../context/AppContext.jsx";

const COLUMNS = [
  { id: "todo", title: "To do" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];

export default function TaskBoard() {
  const { tasks, setTasks, currentMember } = useApp();

  const moveTask = (taskId, direction) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task;

        const currentIndex = COLUMNS.findIndex((column) => column.id === task.status);
        const nextIndex = currentIndex + direction;

        if (nextIndex < 0 || nextIndex >= COLUMNS.length) return task;

        return { ...task, status: COLUMNS[nextIndex].id };
      })
    );
  };

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {COLUMNS.map((column, columnIndex) => {
        const columnTasks = tasks.filter((task) => task.status === column.id);

        return (
          <section
            key={column.id}
            className="bg-white border border-stone-200 rounded-lg p-4 min-h-60 shadow-sm dark:bg-slate-900 dark:border-slate-800"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-slate-950 dark:text-white">
                {column.title}
              </h3>
              <span className="text-xs font-semibold text-brand dark:text-brand-dark">
                {columnTasks.length}
              </span>
            </div>

            {columnTasks.length === 0 ? (
              <p className="text-sm text-slate-500 mt-4 dark:text-slate-400">
                No tasks here.
              </p>
            ) : (
              <div className="mt-4 space-y-3">
                {columnTasks.map((task) => {
                  const isMine = task.assignee === currentMember;

                  return (
                    <article
                      key={task.id}
                      className={
                        "rounded-lg border bg-stone-50 p-3 shadow-sm dark:bg-slate-950 " +
                        (isMine
                          ? "border-brand dark:border-brand-dark"
                          : "border-stone-200 dark:border-slate-800")
                      }
                    >
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {task.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 dark:text-slate-400">
                        {task.assignee}
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-3">
                        <button
                          type="button"
                          onClick={() => moveTask(task.id, -1)}
                          disabled={columnIndex === 0}
                          className="h-8 w-8 rounded-lg border border-stone-300 text-slate-600 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          onClick={() => moveTask(task.id, 1)}
                          disabled={columnIndex === COLUMNS.length - 1}
                          className="h-8 w-8 rounded-lg border border-stone-300 text-slate-600 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-white dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          →
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
