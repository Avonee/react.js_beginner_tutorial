import { createStore } from 'redux'


//reducer
function names(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return {...state,name:action.payload.name}
    default:
      return state
  }
}

//store
let store = createStore(names,{name:''})


export default store;