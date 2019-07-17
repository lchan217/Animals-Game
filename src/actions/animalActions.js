export function fetchAnimals() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ANIMALS' });
    return fetch('http://localhost:3001/api/animals')
      .then(response => response.json())
      .then(animals => dispatch({ type: 'FETCH_ANIMALS', payload: animals}));
  };
}

export const deadToBreeding = () =>{
  return {type: "DEAD_TO_BREEDING"}
}

export const breedingToWild = () =>{
  return {type: "BREEDING_TO_WILD"}
}

export const endangeredToBreeding = () =>{
  return {type: "ENDANGERED_TO_BREEDING"}
}

export const wildToDead = () =>{
  return {type: "WILD_TO_DEAD"}
}
