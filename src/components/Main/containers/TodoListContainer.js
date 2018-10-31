import { deleteTodo, editTodo } from '../../../actions/todoListActions.js'
import { connect } from 'react-redux'
import TodoList from '../TodoList.js'

const mapStateToProps = (state) => {
  return {
    list: state.todosData.list,
    filter: state.filterData.filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (index)=> {
      dispatch(deleteTodo(index))
    },
    editTodo: (editedTodo, index) => {
      dispatch(editTodo(editedTodo, index))
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default HeaderContainer