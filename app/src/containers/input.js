import { connect } from 'react-redux';
import Input from '../components/_input';
import { addMessageHandler } from '../actions/main';

const mapDispatchToProps = (dispatch) => {
  return {
    addMessageHandler: (message) => {
      dispatch(addMessageHandler(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
