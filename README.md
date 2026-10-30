 <div align="center">

# 💸 PennyWise
### Personal Expense Tracker

**Take control of your money. Track every rupee. Make smarter financial decisions.**

A simple and user-friendly expense tracking application built with **React.js** and **Vite**.

</div>

---

## ✨ About the Project

**PennyWise** is a Personal Expense Tracker designed to help users manage their income and expenses in one place.

Users can create an account, record transactions, monitor their financial summary, and view their spending by category.

The application uses browser Local Storage to save user and transaction data.

## 🚀 Features

- 🔐 **Sign Up & Login** – Create an account and log in.
- 📊 **Dashboard** – View total income, expenses, and available balance.
- 💳 **Transaction Management** – Add, edit, delete, and search transactions.
- 📈 **Expense Reports** – View expenses grouped by category.
- 👤 **Profile Settings** – Update personal details and currency preference.
- 💾 **Local Storage** – Save data in the browser.
- 🚪 **Logout** – Securely end the current session (demo implementation).

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | User Interface |
| JavaScript (ES6+) | Application Logic |
| HTML5 | Structure |
| CSS3 | Styling |
| Vite | Development Tool |
| Local Storage | Data Persistence |

## 📁 Project Structure

```text
personal/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SummaryCard.jsx
│   │   └── TransactionForm.jsx
│   │
│   ├── pages/
│   │   ├── Signup.jsx
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Transactions.jsx
│   │   ├── Reports.jsx
│   │   └── Profile.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone <your-github-repository-url>
```

**2. Navigate to the project folder**

```bash
cd personal
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open in browser**

```text
http://localhost:5173/
```

## 🧭 How to Use

1. Open the PennyWise application.
2. Create an account using the Sign Up page.
3. Log in with your registered credentials.
4. Visit the Dashboard to view your financial summary.
5. Add, edit, delete, or search transactions.
6. Visit Reports to analyze your expenses.
7. Manage your details in the Profile section.

## 🔮 Future Improvements

- Interactive charts and visual analytics.
- Monthly and yearly financial reports.
- Transaction filtering by date and category.
- Export transactions to CSV or PDF.
- Backend integration and secure authentication.
- Improved responsive design.

## ⚠️ Important Note

- This is a front-end learning project.
- Data is stored using browser Local Storage.
- Clearing browser data may remove saved information.
- Authentication is implemented for demonstration purposes and is not production-secure.

## 🎯 Project Objective

The main objective of PennyWise is to develop practical skills in React.js, including components, props, state management, hooks, event handling, conditional rendering, and Local Storage.

---

<div align="center">

### ❤️ Made with React.js

**PennyWise – Small Steps Towards Smarter Money Management.**

</div>
