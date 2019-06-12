import { connect } from 'react-redux';
import ShowList from '../components/_show_list';
import { clearMessagesHandler } from '../actions/main';

const mapStateToProps = (state) => {
  return {
    messages: state.main.messages,
    initialMessages: state.main.initialMessages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearMessagesHandler: () => {
      dispatch(clearMessagesHandler());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
