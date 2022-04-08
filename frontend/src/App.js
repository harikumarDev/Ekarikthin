import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { UserContext } from "./Context/UserContext";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Registrations from "./components/Registrations/Registrations";
import Layout from "./components/Layout/Layout";
import RegSuccess from "./components/Registrations/RegSuccess";
import Gallery from "./components/Gallery/Gallery";
import Organisers from "./components/Organisers/Organisers";
import Login from "./components/Admin/Login";
import VerifyToken from "./components/Admin/VerifyToken";
import AllRegistrations from "./components/Admin/AllRegistrations";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  return (
    <div className="App">
      <ReactNotifications />
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="events" element={<Events />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="organisers" element={<Organisers />} />
              <Route path="registration" element={<Registrations />} />
              <Route path="registration/:id" element={<RegSuccess />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/verify" element={<VerifyToken />} />
              <Route
                path="/admin/allregistrations"
                element={<AllRegistrations />}
              />
            </Routes>
          </Layout>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
