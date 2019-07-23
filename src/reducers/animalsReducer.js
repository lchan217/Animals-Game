export default function animalsReducer(state = [], action) {
  switch (action.type){
    case 'LOADING_ANIMALS':
    return {...state}

    case 'FETCH_ANIMALS':
    return action.payload

    case 'BREEDING_TO_WILD':
    const breedingToWild = [...state]
    const breedingToWildResult = breedingToWild.map(animal => {
      if(animal.id === action.id && animal.status === "breeding"){
        if(animal.health === 5){
        animal.status = "wild"
      } else if(animal.health < 5) {
          alert('Oops! Your animal is not healthy enough to be released. Please gain 5 health points.')
        }
      }
      return animal
    })
    return breedingToWildResult

    case 'ENDANGERED_TO_BREEDING':
    const endangeredToBreeding = [...state]
    const endangeredToBreedingResult = endangeredToBreeding.map(animal => {
      if(animal.id === action.id && animal.status === "endangered"){
        animal.status = "breeding"
      }
      return animal
    })
    return endangeredToBreedingResult

    case 'NURSE':
    const currentHealth = [...state]
    const increasedHealth = currentHealth.map(animal => {
      if(animal.id === action.id && animal.status === "breeding"){
        if(animal.health < 5){
        animal.health++} else {
          alert("Ready to be released back into the wild!")
        }
      }
      return animal
    })
    return increasedHealth

    default:
      return state;
  }
}
