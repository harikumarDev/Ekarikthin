import React from "react";
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
import { IoIosArrowDropright } from "react-icons/io";
import "./Registrations.css";
import { categories, events, eventCodes, eventCost } from "../../utils/Events";
import {
  notifyError,
  notifyInfo,
  notifySuccess,
} from "../../utils/Notification";
import Main from "./Main";

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
    category: "cultural",
    event: "Cosplay - Solo",
    paymentMode: "At venue",
  });

  const [btnDisabled, setBtnDisable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setRegForm({ ...regForm, [name]: value, event: events[value][0].event });
    } else {
      setRegForm({ ...regForm, [name]: value });
    }
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

  const registerEvent = async (e) => {
    e.preventDefault();
    setBtnDisable(true);

    if (regForm.phone.length !== 10) {
      notifyError("Check your phone number");
      setBtnDisable(false);
      return;
    }
    regForm.eventCode = eventCodes[regForm.category][regForm.event];

    if (regForm.paymentMode === "At venue") {
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
        err.response.data.code === "REG_EXISTS"
          ? notifyInfo("You have already registered for this event")
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
          image:
            "https://scontent.fdel29-1.fna.fbcdn.net/v/t31.18172-8/25626189_1741701399470560_3598742550576128181_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=on0qtWrtDngAX_cYVgV&_nc_ht=scontent.fdel29-1.fna&oh=00_AT91WFTKQVCVB728gP-r5SGrH2744KGvihesgbzLxhI9fw&oe=625A1463",
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
      <div className="form">
        <form onSubmit={registerEvent}>
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
            value={regForm.phone}
            onChange={handleChange}
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
              <MenuItem value="Online">Pay Online</MenuItem>
            </Select>
          </FormControl>
          <div className="regSub">
            <Button
              type="submit"
              variant="contained"
              disabled={btnDisabled}
              color="secondary"
            >
              {regForm.paymentMode === "At venue" ? (
                "Submit"
              ) : (
                <>
                  Continue{" "}
                  <IoIosArrowDropright
                    style={{ marginLeft: "8px", fontSize: "20px" }}
                  />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </Main>
  );
}
