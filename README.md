# 📚 Study Buddy

> An AI-powered learning platform that transforms study material into an interactive learning experience using Retrieval-Augmented Generation (RAG).

---

## 🚀 Overview

Study Buddy enables students to upload their study material and instantly interact with it through multiple AI-powered learning agents.

Instead of reading hundreds of pages manually, students can:

- 👨‍🏫 Ask questions from the uploaded document
- 📝 Generate concise revision notes
- ❓ Take AI-generated quizzes
- 📅 Create personalized study plans
- 🤖 Chat with a persistent AI study assistant

All responses are grounded in the uploaded document using a Retrieval-Augmented Generation (RAG) pipeline.

---

## ✨ Features

### 👨‍🏫 AI Teacher

- Ask questions from uploaded PDFs
- Context-aware answers
- Source citations
- Conversation history

---

### 📝 AI Notes

Generate structured notes including:

- Key concepts
- Definitions
- Important points
- Revision summaries

---

### ❓ AI Quiz

Automatically generates multiple-choice quizzes featuring:

- Easy, Medium & Hard questions
- Automatic scoring
- Answer review
- Instant feedback

---

### 📅 Study Planner

Generate personalized study schedules based on:

- Selected topic
- Number of study days
- Retrieved learning material

Each day includes:

- Topics
- Practice tasks
- Revision tasks
- Estimated study time

---

### 🤖 Buddy

A persistent AI assistant available across all learning pages.

Buddy can:

- Answer follow-up questions
- Maintain conversation history
- Assist while studying
- Provide contextual guidance

---

## 🧠 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router

### Backend

- FastAPI
- Uvicorn
- Pydantic

### AI

- Together AI (Llama)
- Retrieval-Augmented Generation (RAG)

### Vector Database

- ChromaDB

### PDF Processing

- PyMuPDF

---

## 🏗 Architecture

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
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
    Teacher          Notes            Planner
        │
        ▼
      Quiz
        │
        ▼
      Buddy
```

---

## 📂 Project Structure

```
study-buddy/

├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── services/
│   │   ├── rag/
│   │   ├── models/
│   │   └── core/
│   │
│   ├── requirements.txt
│   └── main.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layout/
│   │   ├── context/
│   │   └── api/
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/study-buddy.git

cd study-buddy
```

---

## Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Backend:

```env
TOGETHER_API_KEY=your_api_key
```

---

## Current Features

- PDF Upload
- RAG Pipeline
- Teacher Agent
- Notes Agent
- Quiz Agent
- Planner Agent
- Buddy Chatbot
- Persistent Sidebar
- Source Retrieval
- Interactive Quiz
- Day-wise Planner

---
Deployment - WIP
---
Challenges - looking for free/cost effective deployment options as this project is resource hungry.

