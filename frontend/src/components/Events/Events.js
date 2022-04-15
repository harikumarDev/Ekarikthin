import React, { useEffect, useState } from "react";
import { Switch, Dialog } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ReactGA from "react-ga";
import Card from "./Card";
import { allEvents } from "../../utils/Events";
import "./Events.css";
import Filter from "./Filter";
import Event from "./Event/Event";

export default function Events() {
  const [day, setDay] = useState(1);
  const [events, setEvents] = useState(allEvents.filter((e) => e.day === 1));
  const [filtered, setFiltered] = useState(
    allEvents.filter((e) => e.day === 1)
  );
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState({});

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA);
    ReactGA.pageview("/events");
  }, []);

  const handleChangeDay = () => {
    const newDay = day === 1 ? 2 : 1;
    const newEvents = allEvents.filter((e) => e.day === newDay);
    setDay(newDay);
    setEvents(newEvents);
    setFiltered(newEvents);
  };

  const showEvent = (event) => {
    setEvent(event);
    setOpen(true);
  };

  return (
    <div className="eve-cont">
      <div className="eve-head">
        <h1>EVENTS (Day {day})</h1>
        <div className="eve-day">
          Day 1{" "}
          <Switch
            defaultChecked={false}
            onChange={handleChangeDay}
            color="secondary"
          />{" "}
          Day 2
        </div>
      </div>
      <div className="eve-filter">
        <Filter
          events={events}
          setFiltered={setFiltered}
          active={active}
          setActive={setActive}
        />
      </div>
      <motion.div layout className="eve-card-cont">
        <AnimatePresence>
          {filtered.map((event, ind) => (
            <Card
              key={ind}
              event={event}
              showEvent={showEvent}
              dataImage={event.image}
            >
              <h1 className="card-head-h1">{event.event}</h1>
              <p className="card-head-p">
                {event.description.length > 45
                  ? event.description.slice(0, 45) + "..."
                  : event.description}
              </p>
              <p className="card-head-p">
                {event.date} | {event.time}
              </p>
            </Card>
          ))}
        </AnimatePresence>
      </motion.div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
        disableScrollLock
      >
        <Event event={event} setOpen={setOpen} />
      </Dialog>
    </div>
  );
}
