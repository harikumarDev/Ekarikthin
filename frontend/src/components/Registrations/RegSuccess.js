import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Link,
  // useSearchParams,
} from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Main from "./BgDesign/Main";
import "./Registrations.css";
import { notifyError } from "../../utils/Notification";

export default function RegSuccess() {
  const { id } = useParams();
  const navigate = useNavigate();

  // const [searchParams] = useSearchParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const ac = new AbortController();
    // const signal = ac.signal;

    // const fetchQuery = (signal) => {
    //   if (id === "pay") {
    //     const email = searchParams.get("email");
    //     const eventCode = searchParams.get("eventCode");
    //     return fetch("/api/register/details", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email, eventCode }),
    //       signal,
    //     });
    //   } else {
    //     return fetch(`/api/register/${id}`, {
    //       signal,
    //     });
    //   }
    // };

    const getRegDetails = async () => {
      try {
        const { data } = await axios.get(`/api/register/${id}`);
        setDetails(data.registration);
        // console.log(data);
        setLoading(false);
      } catch (err) {
        notifyError("Something went wrong. Please try again");
        navigate("/registration");
        setLoading(false);
      }
    };
    setLoading(true);
    getRegDetails();
    // axiosInstance
    //   .get(`/api/register/${id}`)
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     if (resp.success) {
    //       setDetails(resp.registration);
    //     } else {
    //       notifyError("Invalid request. Registration not found");
    //       navigate("/registration");
    //     }
    //   })
    //   .catch(() => {
    //     notifyError("Server error. Please try again later");
    //     navigate("/registration");
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    // return () => {
    //   ac.abort();
    // };
    // eslint-disable-next-line
  }, []);

  return (
    <Main title="Registration successful">
      <div className="reg-success">
        <p>You will receive an Email with your registration details.</p>
        {details && (
          <h2 className="reg-token">
            Token:{" "}
            <span>
              {" "}
              {loading ? (
                <CircularProgress size={25} color="secondary" />
              ) : (
                details.tokenId
              )}
            </span>
          </h2>
        )}
        <Link
          to="/registration"
          style={{ color: "blue", float: "right", textDecoration: "underline" }}
        >
          Register for another event
        </Link>
      </div>
    </Main>
  );
}
