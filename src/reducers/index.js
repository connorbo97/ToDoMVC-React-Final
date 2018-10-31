import { combineReducers } from 'redux'
import todoListReducers from './todoListReducers.js'
import filterReducers from './filterReducers.js'

//if you wanted to add another reducer, you would add it here
const reducers = combineReducers({
  todosData: todoListReducers,
  filterData: filterReducers,
})

export default reducers