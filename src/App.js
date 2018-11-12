import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetail";
import SignIn from "./components/auth/SignIn";
import { Layout } from "antd";
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Layout style={{ padding: "24px 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/project/:id" component={ProjectDetails} />
                <Route path="/signin" component={SignIn} />
              </Switch>
            </Content>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
