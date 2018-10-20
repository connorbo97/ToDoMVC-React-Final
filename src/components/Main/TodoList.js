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
      console.log(todo)
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
        {/* <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
        {this.renderTodos()}
      </ul>
    )
  }
}

export default TodoList;
