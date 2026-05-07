import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AppContext = createContext(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function AppProvider({ children }) {
  const [members] = useState(["Hridey", "Aarav", "Riya"]);
  const [currentMember, setCurrentMember] = useState("Hridey");
  const [stage, setStage] = useState(1);
  const [theme, setTheme] = useState(getInitialTheme);

  const [ideas, setIdeas] = useState([]);
  const [votes, setVotes] = useState({});
  const [winnerId, setWinnerId] = useState(null);

  const [tasks, setTasks] = useState([]);
  const [scores, setScores] = useState({});

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const addIdea = (title, desc) => {
    if (!title.trim()) return;
    setIdeas((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        desc: desc.trim(),
        author: currentMember,
      },
    ]);
  };

  const removeIdea = (id) => {
    setIdeas((prev) => prev.filter((i) => i.id !== id));
    setVotes((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const toggleVote = (ideaId) => {
    setVotes((prev) => {
      const list = prev[ideaId] || [];
      const next = list.includes(currentMember)
        ? list.filter((n) => n !== currentMember)
        : [...list, currentMember];
      return { ...prev, [ideaId]: next };
    });
  };

  const finalizeWinner = () => {
    let topId = null;
    let topCount = -1;
    for (const idea of ideas) {
      const count = (votes[idea.id] || []).length;
      if (count > topCount) {
        topCount = count;
        topId = idea.id;
      }
    }
    setWinnerId(topId);
    if (topId) setStage(3);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({
      members,
      currentMember,
      setCurrentMember,
      stage,
      setStage,
      theme,
      toggleTheme,
      ideas,
      addIdea,
      removeIdea,
      votes,
      toggleVote,
      winnerId,
      finalizeWinner,
      tasks,
      setTasks,
      scores,
      setScores,
    }),
    [members, currentMember, stage, theme, ideas, votes, winnerId, tasks, scores]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
