import { useState } from "react";
import "./App.css";
import ProductTable from "./components/productTable";

function App() {
  const diepvries = [
    {
      lade: 1,
      voeding: "worst",
      aantal: "4",
      gewicht: "200g",
      datum: "11/12/2025",
    },
    {
      lade: 1,
      voeding: "broccoli",
      aantal: "-",
      gewicht: "500g",
      datum: "11/12/2025",
    },
    {
      lade: 1,
      voeding: "biefstuk",
      aantal: "2",
      gewicht: "400g",
      datum: "11/12/2025",
    },
    {
      lade: 2,
      voeding: "hamburgers",
      aantal: "6",
      gewicht: "-",
      datum: "11/12/2025",
    },
    {
      lade: 3,
      voeding: "frieten",
      aantal: "1",
      gewicht: "1Kg",
      datum: "11/12/2025",
    },
  ];
  // Wat is de betekenis van [...]?
  const gesorteerdeDiepvries = [...diepvries].sort((a, b) => a.lade - b.lade);
  return (
    <>
      <ProductTable producten={gesorteerdeDiepvries} />
    </>
  );
}

export default App;
