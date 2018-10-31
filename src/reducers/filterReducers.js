import {
  UPDATE_FILTER,
} from '../actions/filterActions.js'

//Filters conversion
//0 = all todos
//1 = only unfinished todos
//2 = only finished todos

const initialState = {
  filter: 0,
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, {filter: action.filter})
    default:
      return state
  }
}

export default todoListReducer