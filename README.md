# 🧩 Full MERN & Node.js Project (SJ_Jewelers + News App Backend)

This repository contains two independent Node.js + MySQL based backend services:

1. **SJ_Jewelers** – A jewelry platform where shop owners can showcase products using a MERN stack.
2. **News App Backend** – RESTful backend APIs consumed by a Flutter-based news application.

---

## 📁 Folder Structure
```text
├── sj_jewelers/ # Jewelry platform (React + Node.js + MySQL)
└── nodejs/
    └── news-app-backend/ # News API backend (Node.js + MySQL) for Flutter app
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

📰 2. News App Backend (for Flutter App)
🔎 Overview
This is a backend-only Node.js application that powers a Flutter news app. It provides APIs for news application


🛠️ Setup Instructions
Prerequisites
Node.js & npm

postgres server
```
