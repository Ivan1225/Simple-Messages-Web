import { MAIN } from '../actions/action_types';

const initialState = {
  messages: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case MAIN.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.data.messages,
      };
    case MAIN.CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, Object.assign({}, action.message)]
      }
    case MAIN.UPDATE_MESSAGE_SUCCESS:
      const newState = {...state};
      const index = newState.messages.findIndex(o => o._id === action.id);
      newState.messages[index].content = action.content;

      return newState;
    case MAIN.DELETE_MESSAGE_SUCCESS:
      const newMessages = state.messages.filter(o => o._id !== action.id);

      return {
        ...state,
        messages: newMessages
      };
    default:
      return state;
  }
};