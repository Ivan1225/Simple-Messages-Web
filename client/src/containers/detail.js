import { connect } from 'react-redux';
import Detail from '../components/detail';
import { updateMessage } from '../actions/main';

const mapStateToProps = (state, { match, history }) => {
  const { messages } = state.main;

  return {
    message: messages.find(m => m._id === match.params.id),
    history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (message) => {
      dispatch(updateMessage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
