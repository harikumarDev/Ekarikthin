import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UserContext } from "../../Context/UserContext";
import { notifyError } from "../../utils/Notification";

const animation = (delay) => ({
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 + delay / 10 < 0.8 ? 0.5 + delay / 10 : 0.65 },
  },
  hidden: { opacity: 0.2, y: 100 },
});

function DetailsCard({ reg, ind }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="details-card"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animation(ind)}
    >
      <div className="details-head">
        <h2>{reg.name}</h2>
        <span>{reg.email}</span>
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
            <b>Contact: </b>
            <span>{reg.phone}</span>
          </div>
          <div>
            <b>Payment Status: </b>
            <span>{reg.paid ? "Paid" : "Not Paid"}</span>
          </div>
          <div>
            <b>Payment Mode: </b>
            <span>{reg.paymentMode}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AllRegistrations() {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [allRegis, setAllRegis] = useState(null);

  useEffect(() => {
    if (!user) {
      notifyError("Please login to access this page");
      navigate("/admin/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/api/admin/allregistrations", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        setAllRegis(data.allRegs);
      } catch (err) {
        notifyError("Something went wrong. Please try again");
      }
    };

    getData();
  }, [user.token]);

  return (
    <div className="main-cont">
      <h1>All Registrations</h1>
      <div className="main-card-cont">
        {allRegis ? (
          allRegis.map((reg, ind) => (
            <DetailsCard key={ind} reg={reg} ind={ind} />
          ))
        ) : (
          <CircularProgress color="secondary" />
        )}
      </div>
    </div>
  );
}
