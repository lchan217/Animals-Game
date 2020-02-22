export const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: "LOADING_USERS" });
    return fetch("https://animals-game-api.herokuapp.com/api/users")
      .then(response => response.json())
      .then(users => dispatch({ type: "FETCH_USERS", payload: users }));
  };
};

export const addUser = user => {
  return dispatch => {
    const body = {
      name: user.name,
      age: user.age,
      occupation: user.occupation,
      score: user.score
    };
    fetch("https://animals-game-api.herokuapp.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(user => console.log(user))
      .then(user => dispatch({ type: "ADD_USER", user }));
  };
};
