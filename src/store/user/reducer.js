import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  STORY_DELETE_SUCCESS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  space: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    // case STORY_POST_SUCCESS:
    //   return {
    //     ...state,
    //     space: {
    //       ...state.space,
    //       stories: [...state.space.stories, action.payload],
    //     },
    //   };
    case STORY_DELETE_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
