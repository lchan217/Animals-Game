export function fetchAnimals() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ANIMALS' });
    return fetch('http://localhost:3001/api/animals')
      .then(response => response.json())
      .then(animals => dispatch({ type: 'FETCH_ANIMALS', payload: animals}));
  };
}

export const deadToBreeding = (id) =>{
  return {type: "DEAD_TO_BREEDING",
  id}
}

export const breedingToWild = (id) =>{
  return {type: "BREEDING_TO_WILD",
  id}
}

export const endangeredToBreeding = (id) =>{ 
  return {type: "ENDANGERED_TO_BREEDING",
  id}
}

export const wildToDead = (id) =>{
  return {type: "WILD_TO_DEAD",
  id}
}
