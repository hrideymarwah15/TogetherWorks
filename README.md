# 🤝 TogetherWorks

## 📌 Overview

**TogetherWorks** is a collaborative workflow platform that guides teams from idea generation to project completion through a structured 5-stage system. It enables teams to brainstorm ideas, democratically select the best one, distribute tasks efficiently, execute collaboratively, and evaluate contributions transparently.

The platform transforms unorganized group work into a clear, trackable, and fair process.

---

## 🎯 Purpose

The purpose of this project is to build a structured collaboration system that demonstrates:

* Multi-stage workflow design
* Team coordination and task management
* Voting and decision-making systems
* Contribution tracking and evaluation
* Scalable frontend architecture using React

---

## 🚀 Core Features

### 🧩 Stage 1: DUMP (Idea Submission)

* Users submit project ideas
* Each idea includes title and description
* Shared idea pool for all members

---

### 🗳️ Stage 2: VOTE (Decision Making)

* Members vote on all submitted ideas
* Majority rule determines the winning idea
* Real-time vote counting (optional enhancement)

---

### 📋 Stage 3: ASSIGN (Task Distribution)

* Winning idea is broken into smaller tasks
* Tasks are assigned to team members
* Clear ownership of responsibilities

---

### 🛠️ Stage 4: BUILD (Execution System)

* Task workflow:

  * To Do
  * In Progress
  * Done
* Deadline tracking and progress updates
* Kanban-style task management system

---

### ⭐ Stage 5: SCORE (Peer Evaluation)

* Members rate each other (0–10)

* Evaluation based on:

  * Contribution
  * Timeliness
  * Collaboration

* Generates:

  * Average score per member
  * Contribution ranking

---

## 📊 Workflow System

* Step-by-step structured progression
* Each stage produces a clear output
* Encourages accountability and transparency
* Ensures equal participation

---

## 🔍 Data Interaction

* Idea submission and rendering using `.map()`
* Voting logic using array methods
* Task filtering by status (To Do / In Progress / Done)
* Dynamic UI updates based on state changes

---

## 🛠️ Technologies Used

* React (Hooks: useState, useEffect)
* JavaScript (ES6+)
* HTML5
* CSS3 / Tailwind CSS
* Context API (for global state management)

---

## ⚙️ Project Structure

```bash
src/
 ├── components/
 │    ├── IdeaCard.jsx
 │    ├── VoteCard.jsx
 │    ├── TaskBoard.jsx
 │    ├── MemberCard.jsx
 │
 ├── pages/
 │    ├── Dump.jsx
 │    ├── Vote.jsx
 │    ├── Assign.jsx
 │    ├── Build.jsx
 │    ├── Score.jsx
 │
 ├── context/
 │    └── AppContext.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## 🧠 Workflow Engine

* Stage-based navigation system

* Controlled transitions between stages

* Centralized state management for:

  * Ideas
  * Votes
  * Tasks
  * Scores

* Ensures consistent data flow across all stages

---

## 📦 Installation & Setup

Clone the repository

```bash
git clone https://github.com/your-username/togetherworks.git
cd togetherworks
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Access the application

```
http://localhost:5173
```

---

## 🌍 Deployment

The application can be deployed using platforms like Vercel or Netlify for fast and reliable hosting.

---

## 🔥 Future Improvements

* Smart contribution scoring system
* Role-based access (Leader, Developer, Designer)
* Stage locking mechanism
* Real-time collaboration (Firebase/WebSockets)
* Timeline visualization of project lifecycle

---

## 🏁 Conclusion

TogetherWorks demonstrates the ability to design and build a structured, multi-stage collaboration platform. It combines idea management, voting systems, task workflows, and peer evaluation into a single cohesive application, reflecting real-world product thinking and scalable frontend architecture.
