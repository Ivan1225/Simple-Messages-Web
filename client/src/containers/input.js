import { connect } from 'react-redux';
import Input from '../components/_input';
import { createMessage } from '../actions/main';

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(createMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
