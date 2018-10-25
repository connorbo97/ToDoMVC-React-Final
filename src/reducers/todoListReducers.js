import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  MARK_ALL_COMPLETED,
  CLEAR_COMPLETED,
} from '../actions/todoListActions.js'

const initialState = {
  list: [],
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newList = state.list.concat([action.todo])
      return Object.assign({}, state, { list: newList } )
    case DELETE_TODO:
      let filteredList = state.todo.filter((text) => {
        if(text !== action.value)
          return true
        return false
      })
      return Object.assign({}, state, {todo:filteredList})
    case EDIT_TODO:
      let newTodoList = state.list
      newTodoList[action.index] = action.editedTodo
      return Object.assign({}, state, {list: newTodoList})
    case CLEAR_COMPLETED:
      console.log("clearing completed")
      let moddedList = state.list.filter(todo => todo.finished === false)
      return Object.assign({}, state, {list:moddedList})
    case MARK_ALL_COMPLETED:
      let allTasksCompleted = true
      
      for(let i =0; i < state.list.length; i++){
        if(state.list[i].finished === false){
          allTasksCompleted = false
          break
        }
      }

      let completedList = state.list.map(todo => {
        let moddedTodo = todo
        moddedTodo.finished = !allTasksCompleted
        return moddedTodo
      })
      return Object.assign({}, state, {list:completedList})
    default:
      return state
  }
}

export default todoListReducer