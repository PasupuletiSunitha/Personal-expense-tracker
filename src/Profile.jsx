import { useState } from "react";

function Profile({
  currentUser,
  setCurrentUser
}) {
  const [name, setName] = useState(
    currentUser.name
  );

  const [currency, setCurrency] =
    useState(
      localStorage.getItem("currency") ||
        "INR"
    );

  const saveProfile = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) ||
      [];

    const updatedUsers = users.map((u) =>
      u.email === currentUser.email
        ? { ...u, name }
        : u
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    const updatedUser = {
      ...currentUser,
      name
    };

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(updatedUser)
    );

    localStorage.setItem(
      "currency",
      currency
    );

    setCurrentUser(updatedUser);

    alert("Profile Updated");
  };

  return (
    <div>
      <h2>Profile</h2>

      <input
        type="text"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="email"
        value={currentUser.email}
        disabled
      />

      <select
        value={currency}
        onChange={(e) =>
          setCurrency(e.target.value)
        }
      >
        <option value="INR">
          Indian Rupee
        </option>

        <option value="USD">
          US Dollar
        </option>

        <option value="EUR">
          Euro
        </option>
      </select>

      <button onClick={saveProfile}>
        Save Changes
      </button>
    </div>
  );
}

export default Profile;