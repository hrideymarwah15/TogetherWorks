import { useMemo, useState } from "react";
import { useApp } from "../context/AppContext.jsx";

export default function Assign() {
  const { members, currentMember, ideas, winnerId, tasks, setTasks, setStage } = useApp();
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState(currentMember);

  const winner = ideas.find((idea) => idea.id === winnerId);
  const tasksByAssignee = useMemo(
    () =>
      members.map((member) => ({
        assignee: member,
        tasks: tasks.filter((task) => task.assignee === member),
      })),
    [members, tasks]
  );

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        assignee,
        status: "todo",
      },
    ]);
    setTitle("");
  };

  return (
    <section className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-stone-200 pb-5 dark:border-slate-800">
        <div>
          <p className="text-sm font-semibold text-brand dark:text-brand-dark">
            Stage 3
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Assign
          </h2>
          <p className="text-slate-500 text-sm mt-1 dark:text-slate-400">
            Turn the winning idea into a task list with clear owners.
          </p>
        </div>
        <span className="w-fit border border-stone-200 bg-white rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </span>
      </header>

      <div className="bg-white border border-stone-200 rounded-lg p-4 sm:p-5 shadow-sm dark:bg-slate-900 dark:border-slate-800">
        <p className="text-xs font-semibold uppercase text-brand dark:text-brand-dark">
          Winning idea
        </p>
        {winner ? (
          <div className="mt-2">
            <h3 className="font-semibold text-slate-950 dark:text-white">
              {winner.title}
            </h3>
            {winner.desc && <p className="text-sm text-slate-600 mt-2 dark:text-slate-300">{winner.desc}</p>}
            <p className="text-xs text-slate-500 mt-3 dark:text-slate-400">
              by {winner.author}
            </p>
          </div>
        ) : (
          <div className="mt-2">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No winner selected yet.
            </p>
            <button
              onClick={() => setStage(2)}
              className="mt-3 text-brand font-medium text-sm hover:text-teal-800 dark:text-brand-dark dark:hover:text-teal-200"
            >
              Back to Stage 2
            </button>
          </div>
        )}
      </div>

      <form
        onSubmit={submit}
        className="bg-white border border-stone-200 rounded-lg p-4 sm:p-5 space-y-4 shadow-sm dark:bg-slate-900 dark:border-slate-800"
      >
        <label className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Task title
          </span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Example: wireframe the main flow"
            className="mt-1 w-full border border-stone-300 bg-white rounded-lg px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 dark:bg-slate-950 dark:border-slate-700 dark:text-white"
          />
        </label>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <label className="block">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Assignee
            </span>
            <select
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="mt-1 w-full sm:w-48 border border-stone-300 bg-white rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand/30 dark:bg-slate-950 dark:border-slate-700 dark:text-white"
            >
              {members.map((member) => (
                <option key={member} value={member}>
                  {member}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-800 transition dark:bg-brand-dark dark:text-slate-950 dark:hover:bg-teal-200"
          >
            Add task
          </button>
        </div>
      </form>

      {tasks.length === 0 ? (
        <p className="text-center text-slate-500 bg-white border border-dashed border-stone-300 rounded-lg py-10 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400">
          No tasks assigned yet. Add the first one above.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasksByAssignee.map((group) => (
            <section
              key={group.assignee}
              className="bg-white border border-stone-200 rounded-lg p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800"
            >
              <h3 className="font-semibold text-slate-950 dark:text-white">
                {group.assignee}
              </h3>
              {group.tasks.length === 0 ? (
                <p className="text-sm text-slate-500 mt-3 dark:text-slate-400">
                  No tasks yet.
                </p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {group.tasks.map((task) => (
                    <li
                      key={task.id}
                      className="border border-stone-200 bg-stone-50 rounded-lg px-3 py-2 text-sm text-slate-700 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-200"
                    >
                      {task.title}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => setStage(4)}
          className="bg-slate-950 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Done assigning → go to Build
        </button>
      </div>
    </section>
  );
}
