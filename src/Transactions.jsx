import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";

function Transactions() {
  const [transactions, setTransactions] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [editing, setEditing] =
    useState(null);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "transactions"
        )
      ) || [];

    setTransactions(saved);
  }, []);

  const saveTransaction = (data) => {
    let updated;

    if (editing) {
      updated = transactions.map((t) =>
        t.id === editing.id
          ? { ...data, id: editing.id }
          : t
      );

      setEditing(null);
    } else {
      updated = [
        ...transactions,
        {
          ...data,
          id: Date.now()
        }
      ];
    }

    setTransactions(updated);

    localStorage.setItem(
      "transactions",
      JSON.stringify(updated)
    );
  };

  const deleteTransaction = (id) => {
    const updated = transactions.filter(
      (t) => t.id !== id
    );

    setTransactions(updated);

    localStorage.setItem(
      "transactions",
      JSON.stringify(updated)
    );
  };

  const filtered = transactions.filter(
    (item) =>
      item.description
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Transactions</h2>

      <TransactionForm
        onSave={saveTransaction}
        editData={editing}
      />

      <input
        type="text"
        placeholder="Search"
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.type}</td>

              <td>
                <button
                  onClick={() =>
                    setEditing(item)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteTransaction(item.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;