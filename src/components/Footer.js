import React from 'react';


class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>{this.props.count}</strong> item left</span>
        {/* <!-- Remove this if you don't implement routing --> */}
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
        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
      </footer>
    )
  }
}

export default Footer;
