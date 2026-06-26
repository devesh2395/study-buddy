# 📚 Study Buddy

> **An AI-powered learning platform that transforms study material into an interactive learning experience using Retrieval-Augmented Generation (RAG).**

Study Buddy allows students to upload study material and interact with it through multiple AI-powered learning agents. Instead of reading hundreds of pages manually, students can ask questions, generate notes, test their knowledge, create study plans, and receive contextual assistance from an AI study companion.

---

# ✨ Features

## 👨‍🏫 AI Teacher

Ask questions directly from uploaded study material.

**Features**

* Retrieval-Augmented Generation (RAG)
* Context-aware responses
* Source-grounded answers
* Multi-turn conversations

---

## 📝 AI Notes Generator

Generate concise revision notes from uploaded documents.

**Features**

* Structured markdown notes
* Key concepts
* Definitions
* Important points
* Quick revision summaries

---

## ❓ AI Quiz Generator

Automatically generates quizzes from the uploaded study material.

**Features**

* Multiple-choice questions
* Easy / Medium / Hard difficulty
* Automatic scoring
* Answer review
* Instant feedback

---

## 📅 AI Study Planner

Generate personalized study schedules.

Each day includes:

* Topics to study
* Practice tasks
* Revision tasks
* Estimated study time

---

## 🤖 Buddy

A persistent AI assistant available throughout the application.

Buddy can:

* Answer follow-up questions
* Explain concepts
* Maintain conversation context
* Assist while studying

---

# 🧠 Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router

## Backend

* FastAPI
* Uvicorn
* Pydantic

## AI Stack

* Ollama
* Gemma (Local LLM)
* Retrieval-Augmented Generation (RAG)

## Vector Database

* ChromaDB

## PDF Processing

* PyMuPDF

---

# 🏗 System Architecture

```
                    PDF Upload
                         │
                         ▼
                 Text Extraction
                         │
                         ▼
                    Chunking
                         │
                         ▼
                Embedding Generation
                         │
                         ▼
                    ChromaDB
                         │
      ┌──────────────────┼──────────────────┐
      │                  │                  │
      ▼                  ▼                  ▼
 AI Teacher         AI Notes         AI Planner
      │
      ▼
  AI Quiz Generator
      │
      ▼
      Buddy
```

---

# 📂 Project Structure

```
study-buddy/

├── backend/
│
│   ├── app/
│   │
│   ├── api/
│   ├── core/
│   ├── rag/
│   ├── services/
│   │
│   └── main.py
│
├── frontend/
│
│   ├── src/
│   │
│   ├── components/
│   ├── context/
│   ├── layout/
│   ├── pages/
│   └── api/
│
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/devesh2395/study-buddy.git

cd study-buddy
```

---

# 🦙 Install Ollama

Download Ollama from:

https://ollama.com/download

Verify installation:

```bash
ollama --version
```

---

# 🤖 Download the Gemma Model

Study Buddy uses Google's Gemma model running locally through Ollama.

Download the model:

```bash
ollama pull gemma
```

---

# ▶ Start Ollama

```bash
ollama serve
```

Ollama will start on:

```
http://localhost:11434
```

Keep this terminal running while using Study Buddy.

---

# ⚙ Backend Setup

```bash
cd backend

python -m venv venv
```

Linux/macOS

```bash
source venv/bin/activate
```

Windows

```powershell
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the backend

```bash
uvicorn app.main:app --reload
```

Backend will run at:

```
http://localhost:8000
```

---

# 💻 Frontend Setup

```bash
cd frontend

npm install
```

Run Vite

```bash
npm run dev
```

Frontend will run at

```
http://localhost:5173
```

---

# 📄 Using the Application

1. Start Ollama

2. Start the FastAPI backend

3. Start the React frontend

4. Upload a PDF

5. Use any of the AI agents:

* Teacher
* Notes
* Quiz
* Planner
* Buddy

---

# 📚 Learning Objectives

This project demonstrates:

* Retrieval-Augmented Generation (RAG)
* FastAPI Backend Development
* React Frontend Development
* State Management
* Local LLM Integration using Ollama
* Vector Search using ChromaDB
* AI Agent Design
* REST API Development
* Full Stack Application Architecture

---

# Deployment Plans - 

* Looking for Cost Effective / free Options.

# Notes: 

* Runs with any LLM installed locally.
