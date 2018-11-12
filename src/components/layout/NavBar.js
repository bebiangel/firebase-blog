import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu } from "antd";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const { Header } = Layout;

const NavBar = props => {
  //
  const { auth } = props;
  console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <Header className="header">
      <div />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: "64px", float: "left" }}
      >
        <Menu.Item key="1">
          <Link to="/" className="brand-logo">
            Jaewoos
          </Link>
        </Menu.Item>
      </Menu>
      {links}
    </Header>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(NavBar);
