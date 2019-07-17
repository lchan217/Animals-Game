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

    case 'NURSE':
    //increase health until 5
    const currentHealth = [...state]
    const increasedHealth = currentHealth.map(animal => {
      if(animal.id === action.id){
        animal.health++
      }
      return animal
    })
    return increasedHealth

//     export const addQuote = (quote) =>{
//   return {type: "ADD_QUOTE",
//   quote: Object.assign({}, quote, {votes: 0})}
// }

    default:
      return state;
  }
}
