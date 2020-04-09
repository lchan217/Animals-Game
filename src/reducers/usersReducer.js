export default function usersReducer(state = [], action) {
  switch (action.type) {
    case "LOADING_USERS":
      return { ...state };

    case "FETCH_USERS":
      return action.payload;

    case "ADD_USER":
      const newState = [...state, action.user];
      return newState;

    case "ADD_SCORE":
      const newState2 = [...state, action.user];
      return newState2;

    default:
      return state;
  }
}
