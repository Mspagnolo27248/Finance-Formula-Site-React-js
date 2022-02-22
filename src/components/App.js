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


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PresentValue" element={<PresentValue />} />
      <Route path="/FutureValue" element={<FutureValue />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
