import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

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

  markAllAsCompleted = () => {
    let allTasksFinished = true;
    for(let i =0; i < this.state.todoList.length; i++){
      if(!this.state.todoList[i].finished){
        allTasksFinished = false
        break
      }
    }

    let markAllTrue = !allTasksFinished
    this.setState((prevState) => {
      prevState.todoList.map(todo => {
        todo.finished = markAllTrue;
        return todo
      })
      return {
        todoList: prevState.todoList
      }
    })
  }

  updateFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  clearCompleted = () => {
    this.setState((prevState) => {
      prevState.todoList = prevState.todoList.filter((todo) => todo.finished === false)
      return {
        todoList: prevState.todoList
      }
    })
  }

  getNumToBeDone = () => {
    let count = 0;
    this.state.todoList.forEach(todo => {
      if(!todo.finished)
        count += 1
    })
    return count
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
            markAllAsCompleted={this.markAllAsCompleted}
            filter={this.state.filter}
          />
          {/* <!-- This footer should hidden by default and shown when there are todos --> */}
          <Footer
            count={this.getNumToBeDone()}
            total={this.state.todoList.length}
            updateFilter={this.updateFilter}
            filter={this.state.filter}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </div>
    );
  }
}

export default App;
