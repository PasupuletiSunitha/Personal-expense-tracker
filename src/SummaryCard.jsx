function SummaryCard({ title, amount, color }) {
  return (
    <div
      className="summary-card"
      style={{ borderLeft: `5px solid ${color}` }}
    >
      <h4>{title}</h4>

      <h2>{amount}</h2>
    </div>
  );
}

export default SummaryCard;