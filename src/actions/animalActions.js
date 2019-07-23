export const fetchAnimals = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ANIMALS' });
    return fetch('http://localhost:3001/api/animals')
      .then(response => response.json())
      .then(animals => dispatch({ type: 'FETCH_ANIMALS', payload: animals}));
  };
}

export const nursingToWild = (id) =>{
  return {type: "NURSING_TO_WILD",
  id}
}

export const endangeredToNursing = (id) =>{
  return {type: "ENDANGERED_TO_NURSING",
  id}
}

export const nurse = (id) =>{
  return {type: "NURSE",
  id}
}
