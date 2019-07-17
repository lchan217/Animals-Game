export default function animalsReducer(state = [], action) {
  switch (action.type){
    case 'LOADING_ANIMALS':
    return {...state}

    case 'FETCH_ANIMALS':
    return action.payload

    // const newState = [...state, action.quote]
    // return newState

    case 'BREEDING_TO_WILD':
    return state

    case 'ENDANGERED_TO_BREEDING':
    const eTB = [...state]
    const eTBResult = eTB.map(animal => {
      if(animal.id === action.id){
        animal.status = "breeding"
      }
      return animal
    })
    return eTBResult

    default:
      return state;
  }
}
