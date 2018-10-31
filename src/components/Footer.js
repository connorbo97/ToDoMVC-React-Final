import React from 'react';


class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  renderClearCompleted = () => {
    //if there's no completed items
    //don't render the button
    if(this.props.count === this.props.totalTodos){
      return null
    }
    
    return (
      <button className="clear-completed" onClick={this.props.clearCompletedTodos}>Clear completed</button>
    )
  }

  render() {
    //if there's no todos, render nothing
    if(this.props.totalTodos == 0){
      return null
    }

    return (
      <footer className="footer">
        <span className="todo-count"><strong>{this.props.numTodosUnfinished}</strong> items left</span>
        <ul className="filters">
          <li>
            <a className={this.props.filter === 0 ? "selected" : 0} href="#/" onClick={()=>this.props.updateFilter(0)}>All</a>
          </li>
          <li>
            <a className={this.props.filter === 1 ? "selected" : 0} href="#/active" onClick={()=>this.props.updateFilter(1)}>Active</a>
          </li>
          <li>
            <a className={this.props.filter === 2 ? "selected" : 0} href="#/completed" onClick={()=>this.props.updateFilter(2)}>Completed</a>
          </li>
        </ul>
        {this.renderClearCompleted()}
      </footer>
    )
  }
}

export default Footer;
