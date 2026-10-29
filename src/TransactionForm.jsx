import { useState } from "react";

function TransactionForm({ onSave, editData }) {
  const [formData, setFormData] = useState(
    editData || {
      amount: "",
      category: "",
      date: "",
      description: "",
      type: "expense"
    }
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    onSave(formData);

    setFormData({
      amount: "",
      category: "",
      date: "",
      description: "",
      type: "expense"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button type="submit">
        Save Transaction
      </button>
    </form>
  );
}

export default TransactionForm;