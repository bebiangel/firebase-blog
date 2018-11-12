import React from "react";
import { List, Icon, Layout, Row, Col } from "antd";

const { Content } = Layout;
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
  console.log(props);
  const id = props.match.params.id;
  return (
    <Row>
      <Col span={24}>
        <List.Item
          key={item.title}
          actions={[
            <IconText type="star-o" text="156" />,
            <IconText type="like-o" text="156" />,
            <IconText type="message" text="2" />
          ]}
          style={{ display: "inline-block" }}
        >
          <List.Item.Meta
            title={`${item.title} - ${id}`}
            description={item.description}
          />
          {item.content}
        </List.Item>
      </Col>
    </Row>
  );
};

export default ProjectDetails;
