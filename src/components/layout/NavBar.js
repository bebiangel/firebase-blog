import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import SignedInLinks from "./SignedInLinks";

const { Header } = Layout;

const NavBar = () => {
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

      <SignedInLinks />
    </Header>
  );
};

export default NavBar;
