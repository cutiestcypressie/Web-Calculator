import React from "react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div style={{
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Calculator />
    </div>
  );
}

export default App;