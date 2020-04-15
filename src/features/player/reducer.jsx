const inititalState = { position: [0, 0] };

const reducerName = (state = inititalState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return action.player;
    default:
      return state;
  }
};

export default reducerName;
