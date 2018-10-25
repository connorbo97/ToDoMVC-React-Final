import React from 'react';
import TodoListContainer from './Main/containers/TodoListContainer.js'


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
        <label onClick={this.props.markAllCompleted} htmlFor="toggle-all">Mark all as complete</label>
      </React.Fragment>
    )
  }

  render() {
    //if theres no items in the list, show nothing
    if(this.props.totalTodos === 0){
      return null
    }

    return (
      <section className="main">
        {this.renderMarkAllCompletedButton()}
        <TodoListContainer/>
      </section>
    )
  }
}

export default Main;
