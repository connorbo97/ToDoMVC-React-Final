import { updateFilter } from '../../actions/filterActions.js'
import { clearCompleted } from '../../actions/todoListActions.js'
import { connect } from 'react-redux'
import Footer from '../Footer.js'

const mapStateToProps = (state) => {
  let numTodosUnfinished = 0

  state.todosData.list.forEach( todo => {
    if(!todo.finished) numTodosUnfinished += 1
  })


  return {
    filter: state.filterData.filter,
    numTodosUnfinished,
    totalTodos: state.todosData.list.length,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter)=> {
      dispatch(updateFilter(filter))
    },
    clearCompletedTodos: () => {
      dispatch(clearCompleted())
    }
  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer