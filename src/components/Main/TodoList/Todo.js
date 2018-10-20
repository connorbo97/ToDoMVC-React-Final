import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      val: "",
    }
  }

  updateFinished = () => {
    let newItem = this.props.todo
    newItem.finished = !newItem.finished
    this.props.editItem(newItem)
  }

  renderCheckbox = () => {
    if(this.props.finished){
      return (
        <input className="toggle" type="checkbox" defaultChecked onClick={this.updateFinished}/>
      )
    } else {
      return (
        <input className="toggle" type="checkbox" onClick={this.updateFinished}/>
      )
    }
  }

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
    // if(this.props.editing){
    //   return (
    //     <form onSubmit={()=> {
    //         let newItem = this.props.todo
    //         newItem.value = this.state.value
    //         newItem.editing = false
    //         this.setState({val:""})
    //         this.editItem()
    //       }
    //     }>
    //       <input className="edit" onChange={this.updateEdit} defaultValue={this.props.title}/>
    //     </form>
    //   )
    // } else {
    //   return (
    //     <label onDoubleClick={()=>{
    //         let newItem = this.props.todo
    //         newItem.editing = !newItem.editing
    //         this.setState({val:newItem.title})
    //         console.log(newItem)
    //         this.props.editItem(newItem)
    //       }}
    //     >
    //       {this.props.title}
    //     </label>
    //   )
    // }
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
