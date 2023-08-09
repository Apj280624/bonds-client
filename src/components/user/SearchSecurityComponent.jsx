import React from "react";
import SearchBar from "./SearchBar";

const App = () => {
  const data = [
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
      id: 4,
      isin: 1239393883883,
      issuer: "Amazon",
      // maturityDate: new Date("2023-08-15"),
      coupon: 5,
      type: "Corporate",
      faceValue: 100,
      status: "Active",
    },
    {
      id: 5,
      isin: 1239393883883,
      issuer: "Amazon",
      // maturityDate: new Date("2023-08-15"),
      coupon: 5,
      type: "Corporate",
      faceValue: 100,
      status: "Active",
    },
  ];

  return (
    <div>
      <h1>Search Securities by ID</h1>
      <SearchBar data={data} />
    </div>
  );
};

export default App;
