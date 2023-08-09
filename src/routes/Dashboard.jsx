import React from "react";
// import Navbar from "./components/navbar";
import Card from "../components/user/Card";
import corporateBond from "../assets/images/corporateBond.png";
import governmentBond from "../assets/images/governmentBond.png";
import ForeignBond from "../assets/images/ForeignBond.png";
import treasuryBond from "../assets/images/treasuryBond.png";
import "../css/cards.css";
import "../css/dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {" "}
            <Card
              imageUrl={corporateBond} // Provide the actual image URL
              buttonText="Corporate Bond"
              type="corporate"
            />
          </div>{" "}
          <div className="col-lg-3">
            <Card
              imageUrl={governmentBond}
              buttonText="Government Bond"
              type="govt"
            />
          </div>{" "}
          <div className="col-lg-3">
            <Card
              imageUrl={treasuryBond}
              buttonText="Treasury Bond"
              type="treasury"
            />
          </div>
          <div className="col-lg-3">
            <Card
              imageUrl={ForeignBond}
              buttonText="Foreign Bond"
              type="foreign"
            />
          </div>
        </div>
      </div>
      <div
        className="horizontal-button"
        style={{
          height: "60px",
          width: "100%",
          borderRadius: "10px",
          marginBottom: "100px",
        }}
      >
        <button
          className="long-button"
          style={{ width: "40%" }}
          onClick={() => {
            navigate("/user/view-securities/all");
          }}
        >
          View all securities
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
