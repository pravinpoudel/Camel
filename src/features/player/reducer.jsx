const inititalState = { position: [15, 25] };

const reducerName = (state = inititalState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducerName;
