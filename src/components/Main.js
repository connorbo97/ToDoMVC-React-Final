import React from 'react';
import TodoList from './Main/TodoList.js'


class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  renderMarkAllCompletedButton = () => {
    return (
      <React.Fragment>
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label onClick={this.props.markAllAsCompleted} htmlFor="toggle-all">Mark all as complete</label>
      </React.Fragment>
    )
  }

  render() {
    return (
      <section className="main">
        {this.renderMarkAllCompletedButton()}
        <TodoList
          list={this.props.list}
          deleteItemFromTodoList={this.props.deleteItemFromTodoList}
          editItemFromTodoList={this.props.editItemFromTodoList}
          filter={this.props.filter}
        />
      </section>
    )
  }
}

export default Main;
