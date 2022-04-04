import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Event.css";

export default function Event({ event, setOpen }) {
  return (
    <section className="glass">
      <div className="eve-dashboard">
        <img src={event.image} alt={event.title} height="100%" />
      </div>
      <div className="eve-details">
        <div className="status">
          <h1>{event.title}</h1>
        </div>
        <div className="eve-cards">
          <div className="eve-card">{event.description}</div>
          <div className="eve-card">
            {event.date} | {event.time}
          </div>
          <div className="eve-card terms">
            <h3>Terms and Conditions</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              ullam quas quisquam voluptatem vero ad, et omnis ipsum, deserunt
              ea voluptatibus illo? Ab et in, error tempore aliquid quas
              accusantium!
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
