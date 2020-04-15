import React, { Component } from "react";
import { connect } from "react-redux";
import Camel from "./camel.png";

function Player(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        backgroundImage: `url('${Camel}')`,
        backgroundSize: "cover",
        width: "200px",
        height: "240px",
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    ...state.player,
  };
}

export default connect(mapStateToProps)(Player);
