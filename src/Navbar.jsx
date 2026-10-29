function Navbar({ currentUser, logout }) {
  return (
    <div className="navbar">
      <h2>PennyWise</h2>

      <div>
        <span>Welcome, {currentUser.name}</span>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;