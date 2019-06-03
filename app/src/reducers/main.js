import { MAIN } from '../actions/action_types';

const initialState = {
  messages: [],
  initialMessages: [
    { text: 'Initial messages show up here' },
    { text: 'You need to add some message to start' },
    { text: 'Clear button can clear input message' },
    { text: 'Destroy button can clear stored message' },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MAIN.ADD_MESSAGE_HANDLER:
      return {
        ...state,
        messages: [
          ...state.messages,
          Object.assign({}, action.message)
        ],
      };
    case MAIN.DELETE_MESSAGE_HANDLER:
      return {
        ...state,
        messages: state.messages.filter((data, i) => i !== action.id),
      };
    case MAIN.CLEAR_MESSAGES_HANDLER:
      return {
        ...state,
        messages: [],
        initialMessages: [],
      };
    default:
      return state;
  }
}
