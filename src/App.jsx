import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Register from "./routes/RegisterPage";
import Login from "./routes/LoginPage";
import Dashboard from "./routes/Dashboard";
import ViewSecurities from "./routes/ViewSecurities";
import ViewFlaggedSecurities from "./routes/ViewFlaggedSecurities";
import ViewTrades from "./routes/ViewTrades";
import Navbar from "./components/common/navbar";

import "./css/main.css";
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route
            path="/user/view-securities/:type"
            element={<ViewSecurities />}
          />
          <Route
            path="/user/view-securities-flagged"
            element={<ViewFlaggedSecurities />}
          />
          <Route path="/user/view-trades" element={<ViewTrades />} />
          {/* <Route path="/user/bonds/:name" element={<ViewBonds />} /> */}
          {/* <Route path="/counterparty/register" element={<Register />} />
          <Route path="/counterparty/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
