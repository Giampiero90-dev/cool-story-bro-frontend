const initialState = { loading: true, categories: [] };

export default function spaceReducer(state = initialState, action) {
  switch (action.type) {
    case "spaces/loadingStart":
      return { ...state, loading: action.payload };

    case "spaces/fetched":
      return {
        loading: false,
        categories: action.payload,
      };

    case "spaces/fetchedById":
      return {
        loading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
}
