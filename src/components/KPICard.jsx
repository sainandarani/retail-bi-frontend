function KPIcard({ title, value }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      width: "200px",
      borderRadius: "8px"
    }}>
      <h3>{title}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}

export default KPIcard;