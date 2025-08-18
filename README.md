# Todo App (Dockerized)

A simple Todo App built with Vite + React and containerized using Docker.
This project demonstrates how to run a React app locally using Docker.

---

## Features

* Add & manage todos
* Built with Vite + React for fast development experience
* Fully containerized with Docker

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/atif614/todo-app-dockerized.git
cd todo-app-dockerized
```

### 2. Install dependencies (for local run without Docker)

```bash
npm install
npm run dev
```

The app will be available at:
`http://localhost:5173`

---

## Running with Docker

### Build Docker Image

```bash
docker build -t todo-app .
```

### Run the Container

```bash
docker run -d -p 5173:5173 todo-app
```

The app will be available at:
`http://localhost:5173`

---

## Docker Hub Image

This project is also available on Docker Hub:

```bash
docker pull atifraza0786/todo-app:v1
docker run -d -p 5173:5173 atifraza0786/todo-app:v1
```

---
