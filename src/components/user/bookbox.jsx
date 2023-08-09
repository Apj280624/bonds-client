import React from "react";
import "../../css/tradebox.css";

function BookBox({
  id,
  buyer,
  seller,
  securityName,
  quantity,
  status,
  price,
  tradeDate,
  settlementDate,
}) {
  return (
    <div className="book-box">
      <h1>{id}</h1>
      <hr />

      <p>Buyer : {buyer}</p>
      <p>Seller: {seller}</p>
      <p>Security name : {securityName}</p>
      <p>Quantity : {quantity}</p>
      <p>Status : {status}</p>
      <p>price : {price}</p>
      <p>Quantity : {quantity}</p>

      <p>Trade Date : {tradeDate}</p>
      <p>Settlement Date : {settlementDate}</p>
    </div>
  );
}

export default BookBox;
