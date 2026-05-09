# TogetherWorks

> **🚀 Live Demo:** [https://togetherworks.vercel.app](https://togetherworks.vercel.app)

TogetherWorks is a lightweight team project workflow app that helps a group move from raw ideas to a chosen build, assigned tasks, Kanban progress, and peer scoring — all in one shared React interface.

---

## ✨ Features

- 💡 **Idea Dump** — Teammates collaboratively add project ideas to a shared pool
- 🗳️ **Voting** — Members vote to surface the strongest idea democratically
- 📋 **Task Assignment** — The winning idea is broken down and tasks are assigned to team members
- 🛠️ **Kanban Build Board** — Tasks progress through To Do → In Progress → Done
- 🏆 **Peer Scoring** — Teammates rate each other's contributions and view a final ranking

---

## 🛠️ Tech Stack

| Tool | Version |
|------|---------|
| [React](https://react.dev) | 19 |
| [Vite](https://vitejs.dev) | 8 |
| [Tailwind CSS](https://tailwindcss.com) | 3 |

---

## 🚦 How It Works

1. **Stage 1 · Dump** — Teammates add project ideas to the pool
2. **Stage 2 · Vote** — Members vote on the strongest idea
3. **Stage 3 · Assign** — The winning idea is split into assigned tasks
4. **Stage 4 · Build** — Tasks move through To Do, In Progress, and Done
5. **Stage 5 · Score** — Teammates rate each other and view the ranking

---

## 🏃 Getting Started

```bash
# Clone the repo
git clone https://github.com/hrideymarwah15/TogetherWorks.git
cd TogetherWorks

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Folder Structure

```text
TogetherWorks/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── IdeaCard.jsx
    │   ├── MemberCard.jsx
    │   ├── Navbar.jsx
    │   ├── TaskBoard.jsx
    │   └── VoteCard.jsx
    ├── context/
    │   └── AppContext.jsx
    └── pages/
        ├── Dump.jsx
        ├── Vote.jsx
        ├── Assign.jsx
        ├── Build.jsx
        └── Score.jsx
```

---

## 📦 Deployment

This project is deployed on **Vercel**. Every push to the main branch triggers an automatic redeployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hrideymarwah15/TogetherWorks)
