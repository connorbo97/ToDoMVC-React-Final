/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const MARK_ALL_COMPLETED = 'MARK_ALL_COMPLETED'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

/*
 * action creators
 */

 export function addTodo(todo) {
  return { type: ADD_TODO, todo }
}

export function editTodo(editedTodo, index) {
 return { type: EDIT_TODO, editedTodo, index }
}

export function deleteTodo(index) {
  return { type: DELETE_TODO, index: index }
}

export function markAllCompleted() {
  return {type: MARK_ALL_COMPLETED}
}

export function clearCompleted() {
  return {type: CLEAR_COMPLETED}
}