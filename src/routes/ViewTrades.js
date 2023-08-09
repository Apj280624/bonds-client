import React, { useState, useEffect } from "react";
import BookBox from "../components/user/bookbox";
import "../css/view-trades.css";
// import Notifications from "./components/notifications";
import axios from "axios";
import vars from "../utils/client_vars";
function ViewTrades() {
  const books = [
    {
      id: 101,
      bookName: "first trade",
      quantity: 10,
      bId: 1001,
      sId: 2001,
      isName: "first issuer",
      totPrice: "₹ " + 1000,
      tradeDate: "05/08/2023",
      setDate: "07/08/2023",
    },
    {
      id: 102,
      bookName: "second trade",
      quantity: 8,
      bId: 1002,
      sId: 2002,
      isName: "second issuer",
      totPrice: "₹ " + 2000,
      tradeDate: "07/08/2023",
      setDate: "09/08/2023",
    },
    {
      id: 103,
      bookName: "third trade",
      quantity: 11,
      bId: 1003,
      sId: 2003,
      isName: "third issuer",
      totPrice: "₹ " + 1500,
      tradeDate: "06/08/2023",
      setDate: "08/08/2023",
    },
    {
      id: 104,
      bookName: "fourth trade",
      quantity: 3,
      bId: 1004,
      sId: 2004,
      isName: "fourth issuer",
      totPrice: "₹ " + 2000,
      tradeDate: "07/08/2023",
      setDate: "09/08/2023",
    },

    // Add more book objects here
  ];

  const [trades, setTrades] = useState([]);

  const getSecurities = async () => {
    try {
      const response = await axios.get(vars.SERVER_ORIGIN + "/api/trade");
      console.log(response.data);
      setTrades(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSecurities();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "#293462" }}>Trades</h1>
      <div className="book-container">
        {trades.map((book) => (
          <BookBox
            key={book._id}
            id={book._id}
            buyer={book.buyer}
            seller={book.seller}
            securityName={book.securityName}
            quantity={book.quantity}
            status={book.status}
            price={book.price}
            tradeDate={book.tradeDate}
            settlementDate={book.settlementDate}
          />
        ))}
      </div>
      <div className="notification">
        {/* <Notifications></Notifications> */}
      </div>
    </div>
  );
}

export default ViewTrades;
