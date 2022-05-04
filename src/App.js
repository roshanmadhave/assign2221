import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import AddPatient from "./addPatient";
import Admin from "./admin";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <a href="/">Home</a>
      </div>
      <Routes>
        <Route exact path="/" exact element={<Home />} />
        <Route exact path="/add-patient" exact element={<AddPatient />} />
        <Route exact path="/admin" exact element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
