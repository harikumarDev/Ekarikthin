import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [org, setOrg] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/api/v1/organisers");
        setOrg(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>EKARIKTHIN</h1>
    </div>
  );
}

export default App;
