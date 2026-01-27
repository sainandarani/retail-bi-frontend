const KPIBox = ({ title, value }) => {
  return (
    <div style={styles.box}>
      <h3>{title}</h3>
      <p style={styles.value}>{value}</p>
    </div>
  );
};

const styles = {
  box: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  },
  value: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2c3e50"
  }
};

export default KPIBox;