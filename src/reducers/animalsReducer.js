export default function animalsReducer(state = [], action) {
  switch (action.type){
    case 'LOADING_ANIMALS':
    return {...state}

    case 'FETCH_ANIMALS':
    return action.payload

    case 'ENDANGERED_TO_BREEDING':
    debugger
    return state

    case 'DEAD_TO_BREEDING':
    return state

    case 'BREEDING_TO_WILD':
    return state

    case 'WILD_TO_DEAD':
    return state

    default:
    return state;
  }
}
