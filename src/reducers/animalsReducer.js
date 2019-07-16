export default function animalsReducer(state = [], action) {
  switch (action.type){
    case 'LOADING_ANIMALS':
    return {...state}

    case 'FETCH_ANIMALS':
    // return {...state, action}
    state = action.payload
    return state

    default:
      return state;
  }
}
