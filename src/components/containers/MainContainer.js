import { markAllCompleted } from '../../actions/todoListActions.js'
import { connect } from 'react-redux'
import Main from '../Main.js'

const mapStateToProps = (state) => {
  return {
    totalTodos: state.todosData.list.length,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markAllCompleted: () => {
      dispatch(markAllCompleted())
    }
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainContainer