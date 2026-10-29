import { useMemo } from "react";
import SummaryCard from "./SummaryCard";

function Dashboard() {
  const transactions =
    JSON.parse(
      localStorage.getItem("transactions")
    ) || [];

  const totalIncome = useMemo(() => {
    return transactions
      .filter((t) => t.type === "income")
      .reduce(
        (total, item) =>
          total + Number(item.amount),
        0
      );
  }, [transactions]);

  const totalExpense = useMemo(() => {
    return transactions
      .filter((t) => t.type === "expense")
      .reduce(
        (total, item) =>
          total + Number(item.amount),
        0
      );
  }, [transactions]);

  const balance =
    totalIncome - totalExpense;

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="card-grid">
        <SummaryCard
          title="Income"
          amount={totalIncome}
          color="green"
        />

        <SummaryCard
          title="Expenses"
          amount={totalExpense}
          color="red"
        />

        <SummaryCard
          title="Balance"
          amount={balance}
          color="blue"
        />
      </div>

      <h3>Recent Transactions</h3>

      {transactions.slice(0, 5).map((t) => (
        <div key={t.id}>
          {t.description} - ₹{t.amount}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;