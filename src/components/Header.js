import React from 'react'
import Input from './Header/Input.js'

const Header = (props) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <Input appendItemToDoList={props.addTodo}/>
    </header>
  )
}

export default Header