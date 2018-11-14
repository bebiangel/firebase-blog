import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  //
  render() {
    //
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <Row>
        <Col span={12}>
          <ProjectList projects={projects} />
        </Col>
        <Col span={12}>
          <Notifications notifications={notifications} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects,
  auth: state.firebase.auth,
  notifications: state.firestore.ordered.notification
});

const mapDispatchToProps = dispatch => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notification", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
