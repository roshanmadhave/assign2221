import React from "react";
import { Form, Button, Input } from "antd";

class Home extends React.Component {
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <h1>Vaccination Schedule System</h1>
        <ul>
          <li>
            <a href="./add-patient">Add a patient</a>
          </li>
          <li>
            <a href="./admin">Administer Vaccination</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
