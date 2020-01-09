import { connect } from 'react-redux';
import {
  actions as ProblemsetActions,
  selectors as ProblemSelectors
} from '../../reducers/problemset';
import Problemset from '../../components/Problemset';

const mapStateToProps = state => ({
  result: ProblemSelectors.getResult(state),
  error: ProblemSelectors.getError(state),
});

const mapDispatchToProps = {
  getProblemset: ProblemsetActions.getProblemset,
}

export default connect(mapStateToProps, mapDispatchToProps)(Problemset);
