import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
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
import Details from "./Details";

const headers = [{ label: "Email", key: "email" }];
const headersCC = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
];
const csvStyle = {
  textDecoration: "none",
  color: "white",
  backgroundColor: "purple",
  padding: "10px",
  borderRadius: "5px",
  margin: "10px",
};

const getDownloadData = (registrations) => {
  return registrations.filter((reg) => reg.paid);
};

export default function AllRegistrations() {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [allRegis, setAllRegis] = useState(null);
  const [eventCode, setEventCode] = useState(
    localStorage.getItem("eventCode")
      ? JSON.parse(localStorage.getItem("eventCode"))
      : "all"
  );
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
        setData(data.allRegs);
        if (eventCode === "all") {
          setAllRegis(data.allRegs);
        } else {
          setAllRegis(
            data.allRegs.filter((reg) => reg.eventCode === eventCode)
          );
        }
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
    localStorage.setItem("eventCode", JSON.stringify(value));

    if (value === "all") {
      setAllRegis(data);
    } else {
      setAllRegis(data.filter((reg) => reg.eventCode === value));
    }
  };

  return (
    <div className="main-cont">
      <div className="allreg-head">
        <div className="reg-main-head">
          <h1>All Registrations</h1>
          <h3>({allRegis && allRegis.length})</h3>
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
      <div className="download-reg">
        {allRegis && getDownloadData(allRegis).length > 0 && (
          <div>
            <CSVLink
              data={getDownloadData(allRegis)}
              headers={headers}
              filename={`All Registrations - ${new Date().toLocaleDateString()}.csv`}
              style={csvStyle}
            >
              Download Emails
            </CSVLink>
          </div>
        )}
        {allRegis && eventCode === "TEC_CC" && (
          <CSVLink
            data={allRegis}
            headers={headersCC}
            filename={`CodeCast - ${new Date().toLocaleDateString()}.csv`}
            style={csvStyle}
          >
            Download
          </CSVLink>
        )}
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
      <Details reg={reg} />
    </motion.div>
  );
}
