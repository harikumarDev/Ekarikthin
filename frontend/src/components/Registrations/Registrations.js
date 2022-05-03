import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ReactGA from "react-ga";
// import { IoIosArrowDropright } from "react-icons/io";
import "./Registrations.css";
import { categories, events, eventCodes, eventCost } from "../../utils/Events";
import {
  notifyError,
  notifyInfo,
  notifySuccess,
} from "../../utils/Notification";
import Main from "./BgDesign/Main";
import { closedRegistrations } from "../../utils/Data";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
};

export default function Registrations() {
  const navigate = useNavigate();

  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    category: "cultural",
    event: "Cosplay - Solo",
    paymentMode: "At venue",
  });

  const [btnDisabled, setBtnDisable] = useState(false);
  const [cost, setCost] = useState(400);
  const [otpVerify, setOtpVerify] = useState(false);
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA);
    ReactGA.pageview("/registration");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "event" &&
      (value === "CIVIL WITH CIVICUS" || value === "Logo Designing")
    ) {
      setMsg(true);
    } else {
      setMsg(false);
    }
    let eventCode = eventCodes[regForm.category][regForm.event];
    if (name === "category") {
      setRegForm({ ...regForm, [name]: value, event: events[value][0].event });
      eventCode = eventCodes[value][events[value][0].event];
    } else {
      setRegForm({ ...regForm, [name]: value });
      if (name === "event") eventCode = eventCodes[regForm.category][value];
    }
    setCost(eventCost[eventCode]);
  };

  const resetForm = () => {
    setRegForm({
      name: "",
      email: "",
      phone: "",
      category: "cultural",
      event: "Cosplay - Solo",
      paymentMode: "At venue",
    });
  };

  const sendOTP = async (e) => {
    e.preventDefault();

    regForm.eventCode = eventCodes[regForm.category][regForm.event];

    if (closedRegistrations.includes(regForm.eventCode)) {
      notifyInfo(`Registrations for ${regForm.event} are closed`);
      return;
    }

    setOtpVerify(true);
    try {
      console.log("Send otp");
      const { data } = await axios.post("/api/register/otp", {
        email: regForm.email,
      });
      if (data.success) {
        notifySuccess("OTP sent successfully");
      } else {
        notifyError(data.message);
      }
    } catch (err) {
      notifyError("Something went wrong. Please try again");
      setOtpVerify(false);
    }
  };

  const registerEvent = async (e) => {
    e.preventDefault();
    setBtnDisable(true);

    if (regForm.phone.length !== 10) {
      notifyError("Check your phone number");
      setBtnDisable(false);
      return;
    }
    regForm.otp = otp;
    if (
      regForm.paymentMode === "At venue" ||
      regForm.paymentMode === "To Organiser"
    ) {
      try {
        const { data } = await axios.post("/api/register", regForm);
        if (data.success) {
          notifySuccess("You have successfully registered for the event");
          const regDetails = data.data.newEventReg;
          navigate(`/registration/${regDetails._id}`);
          resetForm();
        }
        setBtnDisable(false);
      } catch (err) {
        const errCode = err.response.data.code;
        errCode === "REG_EXISTS"
          ? notifyInfo("You have already registered for this event")
          : errCode === "OTP_INVALID"
          ? notifyInfo("Invalid OTP. Please try again")
          : notifyError("Something went wrong. Please try again later");
        setBtnDisable(false);
      }
    } else {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        notifyError(
          "Something went wrong. Please check your Internet Connection."
        );
        setBtnDisable(false);
        return;
      }

      try {
        const {
          data: { success, order },
        } = await axios.post("/api/register/payment", {
          amount: eventCost[regForm.eventCode] * 100,
          eventCode: regForm.eventCode,
          email: regForm.email,
        });

        if (!success) {
          notifyError("Something went wrong. Please try again later");
          setBtnDisable(false);
          return;
        }

        const options = {
          key: order.key_id,
          amount: order.amount,
          currency: order.currency,
          name: "Ekarikthin'22 - NITN",
          description:
            regForm.eventCode + "," + regForm.category + "," + regForm.event,
          image: "/logo.png",
          order_id: order.id,
          handler: function (response) {
            notifySuccess("You have successfully registered for the event");
            navigate(
              `/registration/pay?email=${regForm.email}&eventCode=${regForm.eventCode}`
            );
            resetForm();
          },
          prefill: {
            name: regForm.name,
            email: regForm.email,
            contact: regForm.phone,
          },
        };
        const payObj = new window.Razorpay(options);
        payObj.open();
        payObj.on("payment.failed", function (response) {
          notifyError("Payment failed. Something went wrong");
          setBtnDisable(false);
        });
        setBtnDisable(false);
      } catch (err) {
        if (err.response.data.code === "REG_EXISTS") {
          notifyInfo("You have already registered for this event");
        } else {
          notifyError("Something went wrong. Please try again later");
        }
        setBtnDisable(false);
      }
    }
  };

  return (
    <Main>
      {otpVerify ? (
        <div className="form">
          <form onSubmit={registerEvent} autoComplete="false">
            <p>Enter the OTP sent to your mail: {regForm.email}</p>
            <TextField
              variant="outlined"
              label="OTP"
              fullWidth
              name="otp"
              required
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <div className="regSub">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={btnDisabled}
              >
                Verify
              </Button>
            </div>
            <p>
              <b>Don't see an Email?</b> Check in your Spam section
            </p>
          </form>
        </div>
      ) : (
        <div className="form">
          <form onSubmit={sendOTP} autoComplete="false">
            <TextField
              variant="outlined"
              label="Name"
              fullWidth
              name="name"
              required
              value={regForm.name}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              name="email"
              type="email"
              required
              value={regForm.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="College"
              fullWidth
              name="college"
              type="text"
              value={regForm.college}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                value={regForm.category}
                label="Category"
                name="category"
                required
                onChange={handleChange}
              >
                {categories.map((category, ind) => (
                  <MenuItem key={ind} value={category.toLowerCase()}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="event-label">Event</InputLabel>
              <Select
                labelId="event-label"
                value={regForm.event}
                label="Event"
                name="event"
                required
                onChange={handleChange}
              >
                {events[regForm.category].map((eve, ind) => (
                  <MenuItem key={ind} value={eve.event}>
                    {eve.event}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              label="Phone"
              fullWidth
              name="phone"
              type="number"
              required
              InputProps={{ inputProps: { min: 999999999, max: 9999999999 } }}
              value={regForm.phone}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="Cost"
              fullWidth
              name="cost"
              type="number"
              value={cost}
            />
            <FormControl fullWidth>
              <InputLabel id="pay-label">Payment Mode</InputLabel>
              <Select
                labelId="pay-label"
                value={regForm.paymentMode}
                label="Payement Mode"
                name="paymentMode"
                required
                onChange={handleChange}
              >
                <MenuItem value="At venue">At venue</MenuItem>
                <MenuItem value="To Organiser">
                  To Organiser (online events)
                </MenuItem>
                {/* <MenuItem value="Online">Pay Online</MenuItem> */}
              </Select>
            </FormControl>
            {msg && (
              <h4>
                Prizes for the event are revised. Please check it under event
                section
              </h4>
            )}
            <div className="regSub">
              <Button
                type="submit"
                variant="contained"
                disabled={btnDisabled}
                color="secondary"
              >
                {/* {regForm.paymentMode === "At venue" ? (
                  "Submit"
                ) : (
                  <>
                    Continue{" "}
                    <IoIosArrowDropright
                      style={{ marginLeft: "8px", fontSize: "20px" }}
                    />
                  </>
                )} */}
                Continue
              </Button>
            </div>
          </form>
        </div>
      )}
      <div className="eve-notice">
        <p>
          <li>
            In case less no.of registrations, event programming/prize worth
            might be changed, subjected to decision by the Institute
          </li>
        </p>
      </div>
    </Main>
  );
}
