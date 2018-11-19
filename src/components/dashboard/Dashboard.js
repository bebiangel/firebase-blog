import React, { Component } from "react";
import { Row, Col, Modal } from "antd";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { deleteProject } from "../../store/actions/projectActions";

class Dashboard extends Component {
  //
  handleDelete = id => {
    //
    const { deleteProject } = this.props;
    Modal.confirm({
      title: "Delete Item?",
      onOk: () => deleteProject(id)
    });
  };

  render() {
    //
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    return (
      <Row>
        <Col span={12}>
          <ProjectList
            auth={auth}
            projects={projects}
            handleDelete={this.handleDelete}
          />
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

const mapDispatchToProps = dispatch => ({
  deleteProject: id => dispatch(deleteProject(id))
});

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
