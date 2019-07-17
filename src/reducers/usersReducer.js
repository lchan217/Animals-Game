export default function usersReducer(state = [], action) {
  switch (action.type) {
    case 'LOADING_USERS':
    return {...state}

    case 'FETCH_USERS':
    return action.payload

    default:
    return state
  }
}
