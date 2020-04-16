import React from "react";
import { connect } from "react-redux";
import Player from "../player";
import store from "../../config/store";
import Bullet from "../bullet";
import { leaderboardLoaded, shoot } from "../../actions";

const handleEvent = (event) => {
  console.log("i am clicked");
  var rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const mousePosition = [x, y];
  console.log(mousePosition);
  // store.dispatch({
  //   type: "BULLET-FIRED",
  //   payload: mousePosition,
  // });
};

function World(props) {
  console.log(props);
  return (
    <div
      className="player-div"
      style={{
        width: "1024px",
        height: "600px",
        position: "relative",
        margin: "10px auto",
      }}
      onClick={handleEvent}
    >
      <Player />
      <Bullet />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.player,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    leaderboardLoaded: (player) => {
      dispatch(leaderboardLoaded(player));
    },

    shoot: (mousePosition) => {
      dispatch(shoot(mousePosition));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(World);
