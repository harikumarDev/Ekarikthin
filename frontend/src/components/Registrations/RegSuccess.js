import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Link,
  useSearchParams,
} from "react-router-dom";
import Main from "./Main";
import "./Registrations.css";
import { notifyError } from "../../utils/Notification";

export default function RegSuccess() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const ac = new AbortController();
    const signal = ac.signal;

    const fetchQuery = (signal) => {
      if (id === "pay") {
        const email = searchParams.get("email");
        const eventCode = searchParams.get("eventCode");
        return fetch("/api/register/details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, eventCode }),
          signal,
        });
      } else {
        return fetch(`/api/register/${id}`, {
          signal,
        });
      }
    };

    fetchQuery(signal)
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.success) {
          setDetails(resp.registration);
        } else {
          notifyError("Invalid request. Registration not found");
          navigate("/registration");
        }
      })
      .catch(() => {
        notifyError("Server error. Please try again later");
        navigate("/registration");
      });

    return () => {
      ac.abort();
    };
  }, [id, navigate, searchParams]);

  return (
    <Main title="Registration successful">
      <div className="reg-success">
        <p>You will receive an Email with your registration details.</p>
        {details && (
          <h2 className="reg-token">
            Token: <span> {details.tokenId}</span>
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
