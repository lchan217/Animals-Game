export const fetchGoals = () => {
  return dispatch => {
    dispatch({ type: "LOADING_GOALS" });
    return fetch("https://animals-game-api.herokuapp.com/api/goals")
      .then(response => response.json())
      .then(goals => dispatch({ type: "FETCH_GOALS", payload: goals }));
  };
};
