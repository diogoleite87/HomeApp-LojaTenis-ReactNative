import Home from "./src/pages/Home";
import React, { Component, Fragment } from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <Routes/>
      </Fragment>
    );
  }
}
