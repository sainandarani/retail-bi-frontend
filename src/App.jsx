import Dashboard from "./pages/Dashboard.jsx";
import Sales from "./pages/Sales.jsx";
import Inventory from "./pages/Inventory.jsx";
import Returns from "./pages/Returns.jsx";

function App() {
  return (
    <div>
      <h1>Retail BI Dashboard</h1>

      <Dashboard />
      <Sales />
      <Inventory />
      <Returns />
    </div>
  );
}

export default App;