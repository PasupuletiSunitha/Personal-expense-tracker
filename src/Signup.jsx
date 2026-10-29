import { useState } from "react";

function Signup({ setShowSignup }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const registerUser = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password
    ) {
      alert("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    users.push({
      name: form.name,
      email: form.email,
      password: form.password
    });

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Account created");
    setShowSignup(false);
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>

      <form onSubmit={registerUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button type="submit">
          Signup
        </button>
      </form>

      <p
        onClick={() => setShowSignup(false)}
        style={{ cursor: "pointer" }}
      >
        Already have account?
      </p>
    </div>
  );
}

export default Signup;