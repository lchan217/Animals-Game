export default function animalsReducer(state = [], action) {
  switch (action.type){
    case 'LOADING_ANIMALS':
    return {...state}

    case 'FETCH_ANIMALS':
    return {...state, animals: action.animals}

    default:
      return state;
  }
}
