import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      val: "",
    }
  }

  //toggle the finished state of the item
  updateFinished = () => {
    let newItem = this.props.todo
    newItem.finished = !newItem.finished
    this.props.editItem(newItem)
  }

  renderCheckbox = () => {
    //if the todo is finished, render a checked checkbox
    if(this.props.finished){
      return (
        <input className="toggle" type="checkbox" readOnly={true} checked onClick={this.updateFinished}/>
      )
    }
    //else render an unchecked one
    else {
      return (
        <input className="toggle" type="checkbox" readOnly={true} onClick={this.updateFinished}/>
      )
    }
  }

  //the function called when something is typed when the todo is editing
  updateEdit = (e) => {
    this.setState({val: e.target.value})
  }

  renderTitle = () => {
    return (
      <React.Fragment>
        <label onDoubleClick={()=>{
            let newItem = this.props.todo
            newItem.editing = !newItem.editing
            this.setState({val:newItem.title})
            console.log(newItem)
            this.props.editItem(newItem)
          }}
        >
          {this.props.title}
        </label>
      </React.Fragment>
    )
  }

  renderEditSection(){
    return (
      <form onSubmit={(e)=> {
          e.preventDefault()
          let newItem = this.props.todo
          newItem.title = this.state.val
          newItem.editing = false
          this.setState({val:""})
          this.props.editItem(newItem)
        }
      }>
        <input
          className="edit"
          onChange={this.updateEdit}
          defaultValue={this.props.title}
        />
      </form>
    )
  }

  renderDeleteButton = () => {
    return (
      <button className="destroy" onClick={this.props.deleteItem}></button>
    )
  }

  getClassName = () => {
    if(this.props.editing){
      return this.props.finished ? "completed editing" : "editing"
    } else {
      return this.props.finished ? "completed" : ""
    }
  }

  render() {
    return (
      <li className={this.getClassName()}>
        <div className="view">
          {this.renderCheckbox()}
          {this.renderTitle()}
          {this.renderDeleteButton()}
        </div>
        {this.renderEditSection()}
      </li>
    )
  }
}

export default Todo;
