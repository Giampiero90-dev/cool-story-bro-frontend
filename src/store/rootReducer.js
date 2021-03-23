import { combineReducers } from "redux";
import appState from "./appState/reducer";
import spaceReducer from "./space/reducer";
import user from "./user/reducer";

export default combineReducers({
  appState,
  user,
  space: spaceReducer,
});
