import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //
    const { projects } = this.props;

    return (
      <Row>
        <Col span={12}>
          <h2>왼쪽영역</h2>
          <ProjectList projects={projects} />
        </Col>
        <Col span={12}>
          <h2>오른쪽영역</h2>
          <Notifications />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects
  };
};

const mapDispatchToProps = dispatch => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
