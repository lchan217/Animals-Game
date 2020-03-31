export const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: "LOADING_USERS" });
    return (
      fetch("https://animals-game-api.herokuapp.com/api/users")
        // return fetch("http://localhost:3001/api/users")
        .then(response => response.json())
        .then(users => dispatch({ type: "FETCH_USERS", payload: users }))
    );
  };
};

export const addUser = user => {
  return dispatch => {
    const body = {
      name: user.name,
      age: user.age,
      occupation: user.occupation
    };
    fetch("https://animals-game-api.herokuapp.com/api/users", {
      // fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(user => dispatch({ type: "ADD_USER", user }));
  };
};

export const addScore = score => {
  return dispatch => {
    const body = {
      time: score
    };
    fetch("https://animals-game-api.herokuapp.com/api/users", {
      // fetch("http://localhost:3001/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    }).then(resp => resp.json());
  };
};
