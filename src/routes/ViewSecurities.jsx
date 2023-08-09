// import BasicCard from "./BasicCard.js";

// function ViewSecurities() {
//   return (
//     <>
//       <h1>View Securities Page</h1>

//       {/* Add Navbar Component here  */}

//       {/* Search by id or date range or user id filters  */}
//       {/* All Cards  */}
//       <div className="cardContainer">
//         <div className="row">
//           {/* Fetch all securities with details using backend api  */}
//           {/* display all securities with details using a for loop  */}
//           <BasicCard />
//           <BasicCard />
//           <BasicCard />
//         </div>
//       </div>
//     </>
//   );
// }

// export default ViewSecurities;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardComponent from "../components/user/CardComponent.jsx";
import SearchSecurityComponent from "../components/user/SearchSecurityComponent.jsx";
import vars from "../utils/client_vars.js";
import axios from "axios";

const securitiesData = [
  // {
  //   id: 1,
  //   name: "Apple Inc.",
  //   symbol: "AAPL",
  //   price: 150.25,
  // },
  // {
  //   id: 2,
  //   name: "Microsoft Corporation",
  //   symbol: "MSFT",
  //   price: 300.5,
  // },
  {
    id: 3,
    isin: 1239393883883,
    issuer: "Amazon",
    // maturityDate: new Date("2023-08-15"),
    coupon: 5,
    type: "Corporate",
    faceValue: 100,
    status: "Active",
  },
  {
    id: 3,
    isin: 1239393883883,
    issuer: "Amazon",
    // maturityDate: new Date("2023-08-15"),
    coupon: 5,
    type: "Corporate",
    faceValue: 100,
    status: "Active",
  },
  {
    id: 3,
    isin: 1239393883883,
    issuer: "Amazon",
    // maturityDate: new Date("2023-08-15"),
    coupon: 5,
    type: "Corporate",
    faceValue: 100,
    status: "Active",
  },
  {
    id: 3,
    isin: 1239393883883,
    issuer: "Amazon",
    // maturityDate: new Date("2023-08-15"),
    coupon: 5,
    type: "Corporate",
    faceValue: 100,
    status: "Active",
  },
];

//////////////////////////////////////////////////////////////////////

const App = () => {
  const [securities, setSecurities] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  const getSecurities = async () => {
    try {
      const response = await axios.get(vars.SERVER_ORIGIN + "/api/security/");
      console.log(response.data);
      if (params.type === "all") {
      } else if (params.type === "flagged") {
        const type = params.type;
        const typeFilter = "Matured";
        // console.log(typeFilter);
        const temp = response.data.filter((security) => {
          return security.status === typeFilter;
        });

        response.data = temp;
      } else {
        const type = params.type;
        const typeFilter = type[0].toUpperCase() + type.slice(1) + " Bonds";
        console.log(typeFilter);
        const temp = response.data.filter((security) => {
          return security.type === typeFilter;
        });

        response.data = temp;
      }

      setSecurities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSecurities();
  }, []);

  return (
    <>
      {/* <div className="container">
        <SearchSecurityComponent />
      </div> */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {" "}
        {/* <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/user/view-securities/flagged");
          }}
        >
          View flagged securities
        </button> */}
      </div>{" "}
      <div className="container">
        <h1 style={{ textAlign: "center", color: "white" }}>
          View All Securities
        </h1>
        <div className="row">
          {securities.map((security) => (
            <div className="col-md-4">
              <CardComponent key={security._id} security={security} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
