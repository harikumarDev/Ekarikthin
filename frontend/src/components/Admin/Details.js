import React from "react";

export default function Details({ reg }) {
  const dateFromObjectId = (id) => {
    const date = new Date(parseInt(id.substring(0, 8), 16) * 1000)
      .toString()
      .substring(4, 21);
    return date.substring(0, 6) + ", " + date.substring(12);
  };

  return (
    <>
      <div className="details-head">
        <h2>
          {reg.name.split(" ").length > 1
            ? reg.name.split(" ")[0] + " " + reg.name.split(" ")[1]
            : reg.name}
        </h2>
        <span>{reg.email}</span>
        <h4>{reg.college}</h4>
      </div>
      <div className="details-body">
        <div className="details">
          <div>
            <b>Category: </b>
            <span>{reg.category.toUpperCase()}</span>
          </div>
          <div>
            <b>Event: </b>
            <span>{reg.event}</span>
          </div>
          <div>
            <b>Contact: </b>
            <span>{reg.phone}</span>
          </div>
          <div>
            <b>TokenId: </b>
            <span style={{ color: "blue" }}>{reg.tokenId}</span>
          </div>
          <div>
            <b>Payment Status: </b>
            <span>{reg.paid ? "Paid" : "Not Paid"}</span>
          </div>
          <div>
            <b>Payment Mode: </b>
            <span>{reg.paymentMode}</span>
          </div>
          <div>
            <b>Reg. on: </b>
            <span>{dateFromObjectId(reg._id)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
