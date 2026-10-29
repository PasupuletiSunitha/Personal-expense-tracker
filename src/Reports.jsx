function Reports() {
  const transactions =
    JSON.parse(
      localStorage.getItem("transactions")
    ) || [];

  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );

  const categoryTotals = {};

  expenses.forEach((item) => {
    categoryTotals[item.category] =
      (categoryTotals[item.category] || 0) +
      Number(item.amount);
  });

  return (
    <div>
      <h2>Expense Reports</h2>

      {Object.keys(categoryTotals).length ===
      0 ? (
        <p>No transactions available.</p>
      ) : (
        Object.entries(categoryTotals).map(
          ([category, total]) => (
            <div key={category}>
              <p>
                {category} : ₹{total}
              </p>

              <div
                style={{
                  width: `${total}px`,
                  height: "20px",
                  background: "tomato"
                }}
              ></div>
            </div>
          )
        )
      )}
    </div>
  );
}

export default Reports;