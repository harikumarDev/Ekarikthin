import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import "./Admin.css";
import { notifyError, notifySuccess } from "../../utils/Notification";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin/login", {
        username,
        password,
      });
      if (data.success) {
        const userDetails = {
          ...data.user,
          token: data.token,
        };
        notifySuccess("Login success");
        navigate("/");
        localStorage.setItem("user", JSON.stringify(userDetails));
        setUser(userDetails);
      } else {
        notifyError("Something went wrong. Please try again");
      }
    } catch (err) {
      err.response && notifyError(err.response.data.message);
    }
  };

  return (
    <div className="admCont">
      <div className="admLogin">
        <div className="admForm">
          <h2>Admin Login - EK'22</h2>
          <form onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              label="Username"
              fullWidth
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              fullWidth
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="secondary" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
