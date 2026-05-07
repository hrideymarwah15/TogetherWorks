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
    <section>
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Stage 3 · Assign</h2>
        <p className="text-slate-500 text-sm">
          Break the winning idea into focused tasks for the team.
        </p>
      </header>

      <div className="bg-white border border-slate-200 rounded-lg p-4 mb-8">
        <p className="text-xs font-semibold uppercase text-brand">Winning idea</p>
        {winner ? (
          <div className="mt-2">
            <h3 className="font-semibold text-slate-800">{winner.title}</h3>
            {winner.desc && <p className="text-sm text-slate-600 mt-1">{winner.desc}</p>}
            <p className="text-xs text-slate-400 mt-2">by {winner.author}</p>
          </div>
        ) : (
          <div className="mt-2">
            <p className="text-sm text-slate-500">No winner selected yet.</p>
            <button
              onClick={() => setStage(2)}
              className="mt-3 text-brand font-medium text-sm hover:opacity-80"
            >
              Back to Stage 2
            </button>
          </div>
        )}
      </div>

      <form
        onSubmit={submit}
        className="bg-white border border-slate-200 rounded-lg p-4 mb-8 space-y-3"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-full border border-slate-300 rounded px-3 py-2"
        />
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <select
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            className="border border-slate-300 rounded px-3 py-2 text-sm"
          >
            {members.map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-brand text-white px-4 py-2 rounded font-medium hover:opacity-90"
          >
            Add task
          </button>
        </div>
      </form>

      {tasks.length === 0 ? (
        <p className="text-center text-slate-400 py-10">
          No tasks assigned yet. Add the first one above.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasksByAssignee.map((group) => (
            <section
              key={group.assignee}
              className="bg-white border border-slate-200 rounded-lg p-4"
            >
              <h3 className="font-semibold text-slate-800">{group.assignee}</h3>
              {group.tasks.length === 0 ? (
                <p className="text-sm text-slate-400 mt-3">No tasks yet.</p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {group.tasks.map((task) => (
                    <li
                      key={task.id}
                      className="border border-slate-200 rounded px-3 py-2 text-sm text-slate-700"
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
          className="bg-slate-800 text-white px-5 py-2 rounded font-medium hover:bg-slate-700"
        >
          Done assigning → go to Build
        </button>
      </div>
    </section>
  );
}
