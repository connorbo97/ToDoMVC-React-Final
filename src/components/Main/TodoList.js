import React from 'react';
import Todo from './TodoList/Todo.js'

class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  renderTodos = () => {
    const renderTodo = (todo, index) => {
      if(this.props.filter === 1 && todo.finished === true){
        return null
      } else if(this.props.filter === 2 && todo.finished === false){
        return null
      }
      return (
        <Todo
          key={index}
          index={index}
          {...todo}
          todo={todo}
          deleteItem={()=>this.props.deleteItemFromTodoList(index)}
          editItem={(editedItem)=>this.props.editItemFromTodoList(editedItem, index)}
        />
      )
    }

    return this.props.list.map(renderTodo)
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
