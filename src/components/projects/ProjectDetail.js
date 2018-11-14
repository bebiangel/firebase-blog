import React from "react";
import { List, Icon, Row, Col } from "antd";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ProjectDetails = props => {
  //
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (project) {
    return (
      <Row>
        <Col span={24}>
          <List.Item
            key={project.id}
            actions={[
              <IconText type="star-o" text="156" />,
              <IconText type="like-o" text="156" />,
              <IconText type="message" text="2" />
            ]}
            style={{ display: "inline-block" }}
          >
            <List.Item.Meta
              title={`${project.title} - ${project.id}`}
              description={project.content}
            />
            <div>
              <p style={{ fontSize: "0.5rem" }}>
                Posted by {project.authorFirstName} {project.authorLastName}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.4rem", color: "black" }}>
                {project &&
                  project.createdAt &&
                  moment(project.createdAt.toDate()).calendar()}
              </p>
            </div>
          </List.Item>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col span={24}>
          <List.Item style={{ display: "inline-block" }}>
            Loading Data....
          </List.Item>
        </Col>
      </Row>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  //
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
