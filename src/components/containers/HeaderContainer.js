import { addTodo } from '../../actions/todoListActions.js'
import { connect } from 'react-redux'
import Header from '../Header.js'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo)=> {
      dispatch(addTodo(todo))
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer