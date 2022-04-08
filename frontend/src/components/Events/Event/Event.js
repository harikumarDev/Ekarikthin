import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { eventCodes } from "../../../utils/Events";
import "./Event.css";

export default function Event({ event, setOpen }) {
  return (
    <section className="glass">
      <div className="eve-dashboard">
        <img src={event.image} alt={event.event} height="100%" />
      </div>
      <div className="eve-details">
        <div className="status">
          <h1>{event.event}</h1>
        </div>
        <div className="eve-cards">
          <div className="eve-card">{event.description}</div>
          <div className="eve-card">
            {event.date} | {event.time}
            <h4 style={{ paddingTop: "10px" }}>
              Entry Fee: {event.price === 0 ? "NIL" : event.price + " Rs"}
            </h4>
          </div>
          <div className="eve-card terms">
            <h3>Rules {"&"} Regulations</h3>
            <p>
              <span style={{ padding: "1em" }}>
                The Rules for the Event are given in the PDF. You can download
                the PDF from the below link. Try contacting the organiser for
                any queries regarding the event.
              </span>
              <div>
                <a
                  href={`/rules/${
                    eventCodes[event.category.toLowerCase()][event.event]
                  }.pdf`}
                  download
                  style={{
                    textDecoration: "underline",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  Download Rules PDF
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="close-btn">
        <AiOutlineClose onClick={() => setOpen(false)} className="close-icon" />
      </div>
    </section>
  );
}
