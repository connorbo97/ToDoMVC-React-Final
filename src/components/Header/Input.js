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

  //removes whitespace from the ends
  //usually this is included in the language
  //but for some reason js doesn't have it
  strip = (val) => {
    return val.replace(/^\s+|\s+$/g, '');
  }

  //called when the user presses enter
  onSubmit = (e) => {
    e.preventDefault()
    let todo = this.strip(this.state.todo)
    this.setState({
      todo: ""
    })
    if(todo.length === 0){
      return
    }
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
