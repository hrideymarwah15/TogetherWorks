# TogetherWorks

TogetherWorks is a lightweight team project workflow app that helps a group move from raw ideas to a chosen build, assigned tasks, Kanban progress, and peer scoring in one shared React interface.

## Tech Stack

- React 19
- Vite
- Tailwind 3

## How It Works

1. Stage 1 · Dump: teammates add project ideas to the pool.
2. Stage 2 · Vote: members vote on the strongest idea.
3. Stage 3 · Assign: the winning idea is split into assigned tasks.
4. Stage 4 · Build: tasks move through To Do, In Progress, and Done.
5. Stage 5 · Score: teammates rate each other and view the ranking.

## Setup

```bash
npm install
npm run dev
```

## Folder Structure

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
        ├── Assign.jsx
        ├── Build.jsx
        ├── Dump.jsx
        ├── Score.jsx
        └── Vote.jsx
```
