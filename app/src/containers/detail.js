import { connect } from 'react-redux';
import Detail from '../components/detail';

const mapStateToProps = (state, { match, history }) => {
  console.log(history);
  const { messages } = state.main;

  return {
    message: messages[parseInt(match.params.id, 10)].text,
    history,
  };
};

export default connect(mapStateToProps, null)(Detail);
