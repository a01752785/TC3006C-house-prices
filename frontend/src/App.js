import { createContext } from "react";
import "./App.css";
import HousePriceForm from "./components/HousePriceForm";

function App() {
  return (
    <div className="App">
      <h1>Calcule el valor de su propiedad</h1>
      <HousePriceForm />
    </div>
  );
}

export default App;
