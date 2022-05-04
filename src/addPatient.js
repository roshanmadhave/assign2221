import React from "react";
import { Form, Button, Input, DatePicker, Select } from "antd";
import axios from "axios";
const { Option } = Select;
class AddPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  add = (fieldsValue) => {
    let data = {
      name: fieldsValue.name,
      DateOfBirth: fieldsValue.dob.format("YYYY-MM-DD"),
      Gender: fieldsValue.gender,
      PlaceOfBirth: fieldsValue.place,
      BloodGroup: fieldsValue.blood,
      Height: fieldsValue.height,
      Weight: fieldsValue.weight,
    };
    console.log(data);
    let postUrl = "http://localhost:9000/patient/creation";
    axios.post(postUrl, data);
  };
  render() {
    return (
      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            background: "#D3D3D3",
            width: "70%",
          }}
        >
          <Form
            name="basic"
            layout="vertical"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={this.add}
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Place Of Birth"
              name="place"
              rules={[
                {
                  required: true,
                  message: "Please input your place of birth!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Blood Group" name="blood">
              <Select allowClear>
                <Option value="O+">O+</Option>
                <Option value="O-">O-</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Height"
              name="height"
              rules={[{ required: true, message: "Please input your height!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Weight"
              name="weight"
              rules={[{ required: true, message: "Please input your weight!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="dob" label="Date of Birth">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
              <Select placeholder="I'm Select" allowClear>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                style={{ marginTop: "1rem" }}
                htmlType="submit"
                className="submitButton"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default AddPatient;
