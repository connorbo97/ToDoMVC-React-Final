import React from 'react';
import Blah from './Blah.js'
import Header from './Header.js'
import Main from './Main.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'


//Filters conversion
//0 = all todos
//1 = only unfinished todos
//2 = only finished todos


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: [],
      filter: 0,
    }
  }

  appendItemToDoList = (newItem) => {
    this.setState((prevState) => {
        prevState.todoList.push(newItem)
        return {
          todoList: prevState.todoList
        }
      }
    )
  }

  deleteItemFromTodoList = (index) => {
    this.setState((prevState) => {
        prevState.todoList.splice(index,1)
        console.log(prevState.todoList)
        return {
          todoList: prevState.todoList
        }
      }
    )
  }

  editItemFromTodoList = (editedItem, index) => {
    this.setState((prevState) => {
        prevState.todoList[index] = editedItem
        return {
          todoList: prevState.todoList
        }
      }
    )
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header appendItemToDoList={this.appendItemToDoList}/>
          {/* <!-- This section should be hidden by default and shown when there are todos --> */}
          <Main
            list={this.state.todoList}
            deleteItemFromTodoList={this.deleteItemFromTodoList}
            editItemFromTodoList={this.editItemFromTodoList}
          />
          {/* <!-- This footer should hidden by default and shown when there are todos --> */}
          <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count"><strong>0</strong> item left</span>
            {/* <!-- Remove this if you don't implement routing --> */}
            <ul className="filters">
              <li>
                <a className="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
