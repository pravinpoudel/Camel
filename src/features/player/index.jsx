import React, { Component } from "react";
import { connect } from "react-redux";
import Camel from "./camel.png";
import movement from "./movement";

function Player(props) {
  console.log(props);
  return (
    <div
      style={{
        position: "absolute",
        bottom: props.position[0],
        left: props.position[1],
        backgroundImage: `url('${Camel}')`,
        backgroundSize: "cover",
        width: "275px",
        height: "350px",
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    ...state.player,
  };
}

export default connect(mapStateToProps)(movement(Player));
