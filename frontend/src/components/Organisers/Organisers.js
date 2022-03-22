import React, { useEffect } from "react";
import { AiFillFacebook, AiFillPhone, AiFillInstagram } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Organisers.css";
import { organisers } from "../../utils/Data";

const animation = (delay) => ({
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 + delay / 10 < 0.8 ? 0.5 + delay / 10 : 0.8 },
  },
  hidden: { opacity: 0.1, y: 100 },
});

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
        <img
          className="img-fluid"
          alt={org.name}
          src="https://picsum.photos/130/130?image=1027"
        />
      </div>
      <div className="team-content">
        <h3 className="name">{org.name}</h3>
        <h4 className="title">Web Developer</h4>
      </div>
      <ul className="social">
        <li>
          <a href="https://codepen.io/collection/XdWJOQ/">
            <AiFillFacebook style={{ fontSize: "1.6em" }} />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/collection/XdWJOQ/">
            <AiFillPhone style={{ fontSize: "1.6em" }} />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/collection/XdWJOQ/">
            <AiFillInstagram style={{ fontSize: "1.6em" }} />
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
export default function Organisers() {
  return (
    <div className="main-cont">
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
