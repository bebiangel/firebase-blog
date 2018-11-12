import React from "react";
import { List, Icon, Row, Col } from "antd";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const item = {
  href: "http://ant.design",
  title: `ant design part `,
  avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ProjectDetails = props => {
  //
  const { project } = props;
  console.log(project);

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
              description={project.description}
            />
            {project.content}
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
    project: project
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
