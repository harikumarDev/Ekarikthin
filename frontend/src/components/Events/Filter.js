import React, { useEffect } from "react";
import { categories } from "../../utils/Events";

export default function Filter({ events, setFiltered, active, setActive }) {
  useEffect(() => {
    if (active === "All") {
      setFiltered(events);
    } else {
      setFiltered(events.filter((e) => e.category === active));
    }
  }, [active, setFiltered, events]);

  return (
    <div className="filter-cont">
      <button
        className={active === "All" ? "active" : ""}
        onClick={() => setActive("All")}
      >
        All
      </button>
      {categories.map((cat, ind) => (
        <button
          key={ind}
          className={active === cat ? "active" : ""}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
