import { connect } from 'react-redux';
import ShowList from '../components/_show_list';
// import { clearMessagesHandler } from '../actions/main';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    messages: state.main.messages,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     clearMessagesHandler: () => {
//       dispatch(clearMessagesHandler());
//     },
//   };
// };

export default connect(mapStateToProps, null)(ShowList);
// export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
