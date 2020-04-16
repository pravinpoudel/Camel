const inititalState = { position: [60, 25] };

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
