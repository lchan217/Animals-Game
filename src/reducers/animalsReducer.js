export default function animalsReducer(state = [], action) {
  switch (action.type){
    case 'LOADING_ANIMALS':
    return {...state}

    case 'FETCH_ANIMALS':
    return action.payload

    // const newState = [...state, action.quote]
    // return newState

    case 'BREEDING_TO_WILD':
    const breedingToWild = [...state]
    const breedingToWildResult = breedingToWild.map(animal => {
      if(animal.id === action.id){
        animal.status = "wild"
      }
      return animal
    })
    debugger
    return breedingToWildResult

    case 'ENDANGERED_TO_BREEDING':
    const endangeredToBreeding = [...state]
    const endangeredToBreedingResult = endangeredToBreeding.map(animal => {
      if(animal.id === action.id){
        animal.status = "breeding"
      }
      return animal
    })
    return endangeredToBreedingResult

    default:
      return state;
  }
}
