import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Registrations from "./components/Registrations/Registrations";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import RegSuccess from "./components/Registrations/RegSuccess";

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="registration" element={<Registrations />} />
            <Route path="registration/:id" element={<RegSuccess />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
