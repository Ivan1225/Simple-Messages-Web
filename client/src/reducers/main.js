import { MAIN } from '../actions/action_types';

const initialState = {
  messages: [],
  initialMessages: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case MAIN.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.data.messages,
        initialMessages: action.data.initialMessages,
      };
    case MAIN.CREATE_MESSAGE_SUCCESS:
      console.log(action.message)
      return {
        ...state,
        messages: [...state.messages, Object.assign({}, action.message)]
      }
    case MAIN.UPDATE_MESSAGE_SUCCESS:
      const newState = {...state};
      console.log(action)
      const index = newState.messages.findIndex(o => o.id === action.message.id);
      newState.messages[index].text = action.message.text;

      return newState;
    case MAIN.DELETE_MESSAGE_SUCCESS:
      const newMessages = state.messages.filter(o => o.id !== action.id);

      return {
        ...state,
        messages: newMessages
      };
    default:
      return state;
  }
};