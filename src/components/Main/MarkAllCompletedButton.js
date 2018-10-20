import React from 'react';

class MarkAllCompletedButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todo: ""
    }
  }

  onClick = () => {
    
  }

  render() {
    return (
      <React.Fragment>
        <input id="toggle-all" className="toggle-all" type="checkbox" onChange={this.onClick}/>
        <label htmlFor="toggle-all">Mark all as complete</label>
      </React.Fragment>
    )
  }
}

export default MarkAllCompletedButton;
