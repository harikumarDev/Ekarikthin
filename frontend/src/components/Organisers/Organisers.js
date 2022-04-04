import React, { useEffect } from "react";
import { AiFillPhone, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Organisers.css";
import { organisers } from "../../utils/Data";
import { animation } from "../../utils/Animation";

function OrgCard({ org, ind }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="our-team"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animation(ind)}
    >
      <div className="picture">
        <img className="img-fluid" alt={org.name} src={org.image} />
      </div>
      <div className="team-content">
        <h3 className="name">{org.name}</h3>
        <h4 className="title">{org.title}</h4>
      </div>
      <ul className="social">
        <li>
          <a target="_blank" rel="noreferrer" href={`mailto:${org.email}`}>
            <AiFillMail style={{ fontSize: "1.6em" }} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`tel:${org.phone}`}>
            <AiFillPhone style={{ fontSize: "1.6em" }} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={org.insta}>
            <AiFillInstagram style={{ fontSize: "1.6em" }} />
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
export default function Organisers() {
  return (
    <div className="main-cont organisers-bg">
      <h1>
        ORGANISERS OF <span className="underline-ek">EKARITKTHIN'22</span>
      </h1>
      <div className="main-card-cont">
        {organisers.map((org, ind) => (
          <OrgCard key={ind} org={org} ind={ind} />
        ))}
      </div>
    </div>
  );
}
