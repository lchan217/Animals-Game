export default function goalsReducer(state = [], action) {
  switch (action.type) {
    case "LOADING_GOALS":
      return { ...state };

    case "FETCH_GOALS":
      return action.payload;

    default:
      return state;
  }
}
