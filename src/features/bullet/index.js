import React from "react";
import { connect } from "react-redux";
import shoot from "./shoot";
function bullet(props) {
  return (
    <div
      className="bullet"
      style={{
        position: "absolute",
        bottom: "300px",
        left: "221px",
      }}
    />
  );
}

function mapStateToProps(store) {
  return {
    ...store.bullet,
  };
}

export default connect(mapStateToProps)(shoot(bullet));
