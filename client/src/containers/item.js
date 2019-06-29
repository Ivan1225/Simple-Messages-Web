import { connect } from 'react-redux';
import Item from '../components/_item';
import { deleteMessage } from '../actions/main';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMessage: (id) => {
      dispatch(deleteMessage(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
