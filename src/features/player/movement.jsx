import store from "../../config/store";
import { bindActionCreators } from "redux";

export default function movement(player) {
  function getNewPosition(direction) {
    const oldPos = store.getState().player.position;
    switch (direction) {
      case "EAST":
        return [oldPos[0], oldPos[1] + 100];
      case "WEST":
        return [oldPos[0], oldPos[1] - 100];
    }
  }
  function attemptmove(direction) {
    const oldPos = store.getState().player.position;
    const newPosition = getNewPosition(direction);
    console.log(newPosition);
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPosition,
      },
    });
  }

  function handleKey(event) {
    switch (event.keyCode) {
      case 39:
        return attemptmove("EAST");
      case 37:
        return attemptmove("WEST");
    }
  }
  window.addEventListener("keydown", (e) => {
    e.preventDefault();
    handleKey(e);
  });

  return player;
}
