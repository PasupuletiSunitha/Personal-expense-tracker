function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h3>Menu</h3>

      <button onClick={() => setPage("dashboard")}>
        Dashboard
      </button>

      <button onClick={() => setPage("transactions")}>
        Transactions
      </button>

      <button onClick={() => setPage("reports")}>
        Reports
      </button>

      <button onClick={() => setPage("profile")}>
        Profile
      </button>
    </div>
  );
}

export default Sidebar;