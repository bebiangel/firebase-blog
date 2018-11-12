import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

const { Content } = Layout;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //
    return (
      <Row>
        <Col span={12}>
          <h2>왼쪽영역</h2>
          <ProjectList />
        </Col>
        <Col span={12}>
          <h2>오른쪽영역</h2>
          <Notifications />
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
