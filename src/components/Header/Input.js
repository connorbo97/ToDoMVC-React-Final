import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todo: ""
    }
  }

  onChange = e => {
    this.setState({
      todo: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.appendItemToDoList({
      title: this.state.todo,
      finished: false,
      editing: false,
    })
  }

  render() {
    return (
      <form onSubmit ={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state.todo}
          autoFocus
        />
      </form>
    )
  }
}

export default Input;
