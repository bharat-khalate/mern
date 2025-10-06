# 🧩 Full MERN & Node.js Project (SJ_Jewelers + News App Backend)

This repository contains two independent Node.js + MySQL based backend services:

1. **SJ_Jewelers** – A jewelry platform where shop owners can showcase products using a MERN stack.
2. **News App Backend** – RESTful backend APIs consumed by a Flutter-based news application.

---

## 📁 Folder Structure
```text
├── sj_jewelers/ # Jewelry platform (React + Node.js + MySQL)
├── IJRCSIT /# Paper publishing platform 
└── nodejs/
    └── news-app-backend/ # News API backend (Node.js + PostgreSQL) for Flutter app
```
---

## 💎 1. SJ_Jewelers (Jewelry Shop Platform)

### 🔎 Overview

SJ_Jewelers is a web application for jewelry shop owners to showcase and manage their products. Built using:

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MySQL
- **Features**:
  - Add, update, delete jewelry items
  - View product details and images
  - Responsive product gallery

### 🛠️ Setup Instructions

#### Prerequisites

- Node.js & npm
- MySQL server running
- `.env` file with DB credentials

#### `.env` Example

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=sj_jewelers

Install & Run Backend
cd sj_jewelers/backend
npm install
npm run dev

Install & Run Frontend
cd sj_jewelers/frontend
npm install
npm start
```



## 2.IJRCSIT - Paper Publishing Platform

**IJRCSIT** — the *International Journal for Research in Computer Science and Information Technology*. This platform enables researchers to submit, manage, and publish scholarly papers seamlessly.

## 🧠 Purpose

This system is designed to:
- Allow authors to register and submit their research papers.
- Enable reviewers to evaluate submissions.
- Support editors in publishing accepted papers.
- Showcase published volumes and papers publicly.

---

## 🚀 Features

- 📝 Author registration and login
- 📤 Paper submission with metadata (title, abstract, authors, etc.)
- 📚 Volume and issue management
- ✅ Reviewer assignment and status tracking
- 📄 PDF document preview and validation
- 🔍 Public search and view of published papers
- 🛡️ Role-based authentication (Admin, Reviewer, Author)



## 🗄️ Database Schema

![IJRCSIT SQL Diagram](IJRCSIT/journal%20.png)



---

## 🛠️ Tech Stack

| Layer         | Technology                     |
|--------------|---------------------------------|
| Frontend     | React + Tailwind CSS +TypeScript |
| Backend      | Node.js + Express + TypeScript  |
| Database     | PostgreSQL                      |
| ORM          | Prisma ORM                      |
| File Storage | Local                  |
| Auth         | JWT + bcrypt                    |
| PDF Viewer   | React-PDF-Viewer                |
| Deployment   | Docker         |

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/bharat-khalate/mern.git
cd ijrcsit-platform
```

## Backend Setup
cd IJRCSIT/backend
npm install
cp .env.example .env
# Update .env with your DB and JWT credentials
npx prisma migrate dev
npm run dev

## Forntend Setup
cd IJRCSIT/paper-stream-publish
npm install
npm run dev


## 🔐 Environment Variables
Set these variables in your .env file:

env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/ijrcsit
JWT_SECRET=your_jwt_secret
PORT=5000




📰 2. News App Backend (for Flutter App)
🔎 Overview
This is a backend-only Node.js application that powers a Flutter news app. It provides APIs for news application


🛠️ Setup Instructions
Prerequisites
Node.js & npm


