import React from 'react';
import TodoList from './Main/TodoList.js'


class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          list={this.props.list}
          deleteItemFromTodoList={this.props.deleteItemFromTodoList}
          editItemFromTodoList={this.props.editItemFromTodoList}
        />
      </section>
    )
  }
}

export default Main;
