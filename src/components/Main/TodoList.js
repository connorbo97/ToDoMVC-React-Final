import React from 'react';
import Todo from './TodoList/Todo.js'

//Filters conversion
//0 = all todos
//1 = only unfinished todos
//2 = only finished todos

class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  renderTodos = () => {
    //array.map(func) calls the function on each
    //value in the array and replaces it with the value
    //returned by the function

    //so we're taking a list of jsons and mapping them to a
    //list of JSX

    //for each todo json in the todolist 
    return this.props.list.map((todo, index) => {
      //don't render the todo if we're filtering active and the todo is finished
      //or if we're rendering finished and the todo is unfinished
      if(this.props.filter === 1 && todo.finished === true){
        return null
      } else if(this.props.filter === 2 && todo.finished === false){
        return null
      }
      //else render the todo as a Todo Component
      return (
        <Todo
          key={index}
          index={index}
          //this makes a prop for each key in todo
          //e.g title={todo.title} finished={todo.finished} etc.
          {...todo}
          todo={todo}
          deleteItem={()=>this.props.deleteItemFromTodoList(index)}
          editItem={(editedItem)=>this.props.editItemFromTodoList(editedItem, index)}
        />
      )
    })
  }

  render() {
    return (
      <ul className="todo-list">
        {this.renderTodos()}
      </ul>
    )
  }
}

export default TodoList;
