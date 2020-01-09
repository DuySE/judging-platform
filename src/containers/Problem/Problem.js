import { connect } from 'react-redux'
import {
  actions as ProblemActions,
  selectors as ProblemSelectors
} from '../../reducers/problem'
import Problem from '../../components/Problem'

const mapStateToProps = state => ({
  problem: ProblemSelectors.getProblem(state),
  error: ProblemSelectors.getError(state),
})

const mapDispatchToProps = {
  getProblemDetail: ProblemActions.getProblemDetail,
}

export default connect(mapStateToProps, mapDispatchToProps)(Problem)
