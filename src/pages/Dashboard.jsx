import { useEffect, useState } from "react";
import { fetchKPIs } from "../Services/api.js";

export default function Dashboard() {
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
    fetchKPIs().then(setKpis);
  }, []);

  if (!kpis) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Retail BI Dashboard</h2>

      <div>
        <p><b>Total Sales:</b> ₹ {kpis.total_sales}</p>
        <p><b>Units Sold:</b> {kpis.units_sold}</p>
        <p><b>AOV:</b> ₹ {kpis.aov}</p>
        <p><b>ATV:</b> ₹ {kpis.atv}</p>
      </div>
    </div>
  );
}