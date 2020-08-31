import React from "react";
import LoanRequestProvider from "./context/LoanRequestProvider";
import LoanRequest from "./Screens";

function App() {
  return (
    <div className="App">
      <LoanRequestProvider>
        <LoanRequest />
      </LoanRequestProvider>
    </div>
  );
}

export default App;
