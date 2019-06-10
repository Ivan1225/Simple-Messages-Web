import { connect } from 'react-redux';
import Item from '../components/_item';
import { deleteMessageHandler } from '../actions/main';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMessageHandler: (id) => {
      dispatch(deleteMessageHandler(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
