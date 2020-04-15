import React from "react";
// import Map from "./map";
import Player from "../player";
import store from "../../config/store";

function World(props) {
  return (
    <div
      className="player-div"
      style={{
        width: "800px",
        height: "600px",
        position: "relative",
        margin: "10px auto",
      }}
    >
      <Player />
    </div>
  );
}

export default World;
