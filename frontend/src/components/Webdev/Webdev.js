import React, { useState } from "react";
import { TextField, Button, FormLabel } from "@mui/material";
import "./Webdev.css";

export default function Webdev() {
  const [regForm, setRegForm] = useState({
    name: "",
    mobile: "",
    htmlFile: "",
    cssFile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegForm({ ...regForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="webCont">
      <h1>Web Design</h1>
      <div className="wdForm">
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Name"
            fullWidth
            name="name"
            required
            margin="normal"
            value={regForm.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="Mobile"
            fullWidth
            name="mobile"
            required
            type="number"
            margin="normal"
            value={regForm.mobile}
            onChange={handleChange}
          />
          <div>
            <FormLabel style={{ marginRight: "3.6em" }} for="htmlFile">
              HTML File
            </FormLabel>
            <TextField
              variant="outlined"
              name="htmlFile"
              id="htmlFile"
              required
              type="file"
              margin="normal"
              value={regForm.htmlFile}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormLabel style={{ marginRight: "4em" }} for="cssFile">
              CSS File
            </FormLabel>
            <TextField
              variant="outlined"
              name="cssFile"
              id="cssFile"
              required
              type="file"
              margin="normal"
              value={regForm.cssFile}
              onChange={handleChange}
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="success"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
