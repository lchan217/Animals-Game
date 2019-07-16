export default function animalsReducer(state = [], action) {
  switch (action.type){
    case 'LOADING_ANIMALS':
    return {...state}

    case 'FETCH_ANIMALS':
    debugger 
    return {...state, pictures: action.payload}


    default:
      return state;
  }
}
