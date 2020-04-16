const initialState = {
  position: [300, 221],
};

const bulletReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BULLET-FIRED":
      return { ...action.payload };
    default:
      return state;
  }
};

export default bulletReducer;
