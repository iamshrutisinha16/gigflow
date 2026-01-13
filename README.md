# 🚀 GigFlow – Full Stack Freelance Marketplace

**GigFlow** is a mini freelance marketplace web application where users can post jobs (gigs) and freelancers can apply by submitting bids.  
This project demonstrates **full-stack MERN development skills**, including authentication, secure APIs, and database relationships.

---

## 📌 Project Overview

GigFlow allows users to:

- 🔐 Register and log in securely  
- 🧑‍💼 Clients to post freelance jobs (gigs)  
- 👨‍💻 Freelancers to browse gigs and place bids  
- 🤝 Clients to review bids and hire freelancers  

📘 This project is built as part of a **Full Stack Development Internship Assignment**.

---

## 🛠️ Tech Stack

### 🎨 Frontend
- React.js (Vite)
- React Router DOM
- Tailwind CSS
- Axios

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication (HttpOnly Cookies)

---

## ✨ Core Features

### 🔐 Authentication
- Secure login using JWT
- Protected routes for authorized users only

### 📄 Gig Management
- View all available gigs
- Create new gigs (Title, Description, Budget)
- Search gigs by title

### 💰 Bidding System
- Freelancers can place bids on gigs
- Clients can view all bids on their gigs
- Bid status management:
  - ⏳ Pending  
  - ✅ Hired  
  - ❌ Rejected  

---

## 📄 Application Pages

- 🔑 Login Page  
- 📋 Gigs Listing Page  
- ➕ Create Gig Page  
- 📝 Bid on Gig Page  
- 👀 View Bids Page  

---

## 🔗 API Endpoints

### 🔐 Authentication
- `POST /api/auth/login` → User login

### 📄 Gigs
- `GET /api/gigs` → Fetch all open gigs
- `POST /api/gigs` → Create a new gig

### 💰 Bids
- `POST /api/bids` → Submit a bid for a gig
- `GET /api/bids/:gigId` → View bids for a specific gig

---

## 🗄️ Database Schema

### 👤 User
- name
- email
- password

### 📄 Gig
- title
- description
- budget
- ownerId
- status (open / assigned)

### 💰 Bid
- gigId
- freelancerId
- message
- status (pending / hired / rejected)

---

## ▶️ How to Run the Project

### ⚙️ Backend Setup
```bash
cd backend
npm install
npm run dev

### Frontend Setup

cd frontend
npm install
npm run dev

📦 Submission Details
📁 Source Code: GitHub Repository
🎥 Demo: Loom video explaining the hiring flow
🌐 Hosting: Frontend and Backend deployed

🏁 Conclusion
GigFlow is a full-stack MERN application that showcases:
Authentication & Authorization
CRUD operations
Relational database handling
Clean and responsive UI