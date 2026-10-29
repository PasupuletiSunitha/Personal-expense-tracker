import { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Reports from "./Reports";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");
  const [showSignup, setShowSignup] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setCurrentUser(null);
  };

  if (!currentUser) {
    return showSignup ? (
      <Signup setShowSignup={setShowSignup} />
    ) : (
      <Login
        setShowSignup={setShowSignup}
        setCurrentUser={setCurrentUser}
      />
    );
  }

  return (
    <div className="app-layout">
      <Sidebar setPage={setPage} />

      <div className="main-content">
        <Navbar currentUser={currentUser} logout={logout} />

        {page === "dashboard" && <Dashboard />}
        {page === "transactions" && <Transactions />}
        {page === "reports" && <Reports />}
        {page === "profile" && (
          <Profile
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}
      </div>
    </div>
  );
}

export default App;