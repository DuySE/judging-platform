import { connect } from 'react-redux';
import Register from '../../components/Register';

import {
  actions as RegisterActions,
  selectors as RegisterSelectors
} from '../../reducers/register';

const mapStateToProps = state => ({
  data: RegisterSelectors.getData(state),
  error: RegisterSelectors.getError(state),
})

const mapDispatchToProps = {
  register: RegisterActions.register,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
