import { createStore, combineReducers } from "redux";
import reducer from "../features/player/reducer";
import bulletReducer from "../features/bullet/reducer";
const rootReducer = combineReducers({
  player: reducer,
  bullet: bulletReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
