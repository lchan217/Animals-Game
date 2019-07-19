export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    return fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(users => dispatch({ type: 'FETCH_USERS', payload: users}));
  };
}

export const addUser = (user) =>{
  return (dispatch) => {
    fetch('http://localhost:3001/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: user.name}),
        })
        .then((response) => {return response.json()})

    alert(`Welcome ${user.name}! Please navigate to the instruction page.`)
  }
}
