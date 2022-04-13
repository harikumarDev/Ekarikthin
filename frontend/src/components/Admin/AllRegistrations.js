import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UserContext } from "../../Context/UserContext";
import { notifyError } from "../../utils/Notification";
import { indEventCodes } from "../../utils/Events";
import { animation } from "../../utils/Animation";

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
  const [eventCode, setEventCode] = useState("all");
  const [data, setData] = useState(null);

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
        setData(data.allRegs);
      } catch (err) {
        notifyError("Something went wrong. Please try again");
      }
    };

    getData();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setEventCode(value);

    if (value === "all") {
      setAllRegis(data);
    } else {
      setAllRegis(data.filter((reg) => reg.eventCode === value));
    }
  };

  return (
    <div className="main-cont">
      <div className="allreg-head">
        <div>
          <h1>All Registrations</h1>
        </div>
        <div className="filter-reg">
          <FormControl fullWidth>
            <InputLabel id="event-label">Event Code</InputLabel>
            <Select
              labelId="event-label"
              value={eventCode}
              label="Event Code"
              name="eventCode"
              onChange={handleChange}
            >
              <MenuItem value="all">All</MenuItem>
              {indEventCodes.map((code, ind) => (
                <MenuItem key={ind} value={code}>
                  {code}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="main-card-cont">
        {allRegis ? (
          allRegis.length > 0 ? (
            allRegis.map((reg, ind) => (
              <DetailsCard key={ind} reg={reg} ind={ind} />
            ))
          ) : (
            <h3>No Registrations</h3>
          )
        ) : (
          <CircularProgress color="secondary" />
        )}
      </div>
    </div>
  );
}
