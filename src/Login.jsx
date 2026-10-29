import { useState } from "react";

function Login({
  setShowSignup,
  setCurrentUser
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const loginUser = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    setCurrentUser(user);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={loginUser}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>
      </form>

      <p
        onClick={() => setShowSignup(true)}
        style={{ cursor: "pointer" }}
      >
        Create Account
      </p>
    </div>
  );
}

export default Login;