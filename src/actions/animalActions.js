export function fetchAnimals() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ANIMALS' });
    return fetch('http://localhost:3001/api/animals')
      .then(response => response.json())
      .then(animals => dispatch({ type: 'FETCH_ANIMALS', payload: animals}));
  };
}
