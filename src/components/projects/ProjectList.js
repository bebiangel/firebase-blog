import React from "react";
import { List, Icon } from "antd";
import { Link } from "react-router-dom";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ProjectList = ({ projects }) => {
  //
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={projects}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={project => (
        <List.Item
          key={project.title}
          actions={[
            <IconText type="star-o" text="156" />,
            <IconText type="like-o" text="156" />,
            <IconText type="message" text="2" />
          ]}
        >
          <Link to={`/project/${project.id}`} key={project.id}>
            <List.Item.Meta
              title={project.title}
              description={project.content}
            />
            <p style={{ fontSize: "0.5rem" }}>
              Posted by {project.authorFirstName} {project.authorLastName}
            </p>
          </Link>
        </List.Item>
      )}
    />
  );
};

export default ProjectList;
