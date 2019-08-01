export default function animalsReducer(state = [], action) {
  switch (action.type){
    case 'LOADING_ANIMALS':
    return {...state}

    case 'FETCH_ANIMALS':
    return action.payload

    case 'NURSING_TO_WILD':
    const nursingToWild = [...state]
    const nursingToWildResult = nursingToWild.map(animal => {
      if(animal.id === action.id && animal.status === "Nursing"){
        if(animal.health === 5){
        animal.status = "Wild"
      } else if(animal.health < 5) {
          alert('Oops! Your animal is not healthy enough to be released. Please gain 5 health points.')
        }
      }
      return animal
    })
    return nursingToWildResult

    case 'ENDANGERED_TO_NURSING':
    const endangeredToNursing = [...state]
    const endangeredToNursingResult = endangeredToNursing.map(animal => {
      if(animal.id === action.id && animal.status === "Endangered"){
        animal.status = "Nursing"
      }
      return animal
    })
    return endangeredToNursingResult

    case 'NURSE':
    const currentHealth = [...state]
    const increasedHealth = currentHealth.map(animal => {
      if(animal.id === action.id && animal.status === "Nursing"){
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
