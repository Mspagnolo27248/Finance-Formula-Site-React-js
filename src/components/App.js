import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import PresentValue from "./PresentValue";
import Home from "./Home";
import FutureValue from "./FutureValue";
import LoanPayment from "./LoanPayment"
import FvAnnuityPmt from "./FvAnnuityPmt";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PresentValue" element={<PresentValue />} />
      <Route path="/FutureValue" element={<FutureValue />} />
      <Route path="/LoanPayment" element={<LoanPayment />} />
      <Route path="/FvAnnuity" element={<FvAnnuityPmt />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
