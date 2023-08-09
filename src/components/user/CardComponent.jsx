// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import "bootstrap/dist/css/bootstrap.min.css";

// function BasicCard(props) {
//   return (
//     // <Card className="basic-card col-md-3">
//     //   <Card.Body>
//     //     <Card.Title>{props.securityName || "Security"}</Card.Title>
//     //     <Card.Subtitle className="mb-2 text-muted">
//     //       {props.isin || "ISIN"}
//     //     </Card.Subtitle>
//     //     <Card.Subtitle className="mb-2 text-muted">
//     //       {props.isin || "ISIN"}
//     //     </Card.Subtitle>
//     //     <Card.Subtitle className="mb-2 text-muted">
//     //       {props.isin || "ISIN"}
//     //     </Card.Subtitle>
//     //     <Card.Subtitle className="mb-2 text-muted">
//     //       {props.isin || "ISIN"}
//     //     </Card.Subtitle>
//     //     {/* <Card.Text>
//     //       Some quick example text to build on the card title and make up the
//     //       bulk of the card's content.
//     //     </Card.Text> */}
//     //     {/* <Card.Link href="#">Card Link</Card.Link>
//     //     <Card.Link href="#">Another Link</Card.Link> */}
//     //     <Button variant="primary pb-3 my-2">Buy or Sell</Button>
//     //   </Card.Body>
//     // </Card>
//     <div></div>
//   );
// }

// export default BasicCard;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const cardStyle = {
  backgroundColor: "var(--grey-purple)",
  margin: "2rem",
  padding: "1rem",
  fontFamily: "sans-serif",
  height: "fit-content",
  // width: "wrap-content",
};
const titleStyle = {
  color: "blue",
  fontWeight: "bold",
};

const CardComponent = ({ security }) => {
  return (
    <div className="card" style={cardStyle}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>
          Issuer: {security.issuer}
        </h5>
        <p className="card-text" style={{ color: "white" }}>
          ID: {security._id.substring(8)} <br></br>ISIN: {security.isin}
        </p>
        <p className="card-text" style={{ color: "white" }}>
          Type: {security.type} Bond
        </p>
        {/* <p className="card-text">Maturity Date: {security.maturityDate}</p> */}
        <p className="card-text" style={{ color: "white" }}>
          Coupon: {security.coupon}%
        </p>
        <p className="card-text" style={{ color: "white" }}>
          Face Value: {security.faceValue}
        </p>
        {/* <p className="card-text">{security.symbol}</p> */}
        <a
          href="."
          className="btn btn-primary"
          style={{ color: "black", fontSize: "1.5rem", color: "white" }}
        >
          {security.status}
        </a>
        {security.status === "Matured" ? (
          <p style={{ color: "white", fontSize: "1.4rem" }}>
            Report: {security.report}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default CardComponent;
