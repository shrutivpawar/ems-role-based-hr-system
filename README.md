# 📌 Employee Management System (EMS)

A React-based Employee Management System built using **Vite + React** that demonstrates authentication, role-based access control, global state management, and conditional rendering.

---

## 📌 Project Overview

This project demonstrates:

- 🔐 Role-based authentication
- 👥 Admin, HR, Employee dashboards
- ➕ Admin can add HR & Employees
- ➕ HR can add Employees
- 📂 Role-wise user listing in Admin panel
- 🧪 Mock users for testing

---

## 🚀 Tech Stack

- ⚛️ React (Vite)
- 🎯 Context API (Global State Management)
- 🎨 Custom CSS
- 📦 Node.js & npm

---

## 📂 Project Structure

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Login.jsx
│   ├── Navbar.jsx
│   ├── EmployeeForm.jsx
│   └── EmployeeList.jsx
├── context/             # Global state management
│   └── AppContext.jsx
├── App.jsx              # Main application component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

---

## 🔐 Authentication System

The application uses a **mock users database** inside `AppContext.jsx` to simulate login authentication.

## 👤 Available Login Credentials

### Admin Users
| Username | Password |
|----------|----------|
| admin | admin |
| superadmin | 123 |

### HR Users
| Username | Password |
|----------|----------|
| shruti | 12345 |
| hr1 | hr123 |

### Employee Users
| Username | Password |
|----------|----------|
| employee | employee |
| emp1 | 111 |
| emp2 | 222 |

If invalid credentials are entered, the system displays: Invalid Credentials

---

### Filter Behavior

- Clicking **All** → Shows all HR and Employees
- Clicking a specific department → Shows only that department’s HR and Employees

---

## 👤 Role-Based Access Control

### 🛡 Admin
- Can add **HR**
- Can add **Employees**
- Has role selection dropdown (HR / Employee)
- Users are displayed in:
  - HR Column (if role = HR)
  - Employee Column (if role = Employee)

### 👩‍💼 HR
- Can add **Employees**
- Cannot add HR
- Cannot access Admin panel

### 👨‍💻 Employee
- View-only access
- Cannot add users

---

## 🚀 How To Run The Project

### 1️⃣ Install Dependencies
Make sure you have **Node.js** installed.

Then run:

```bash
npm install

npm run dev




