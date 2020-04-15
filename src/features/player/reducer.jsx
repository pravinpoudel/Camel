const inititalState = { position: [122, 0] };

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
