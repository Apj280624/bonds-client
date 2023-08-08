import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import UserRegister from "./routes/RegisterPage";
import UserLogin from "./routes/LoginPage";
import UserDashboard from "./routes/DashboardPage";

import "./css/main.css";
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
