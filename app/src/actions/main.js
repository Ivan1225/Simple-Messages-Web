import { MAIN } from './action_types';

export const addMessageHandler = (message) => {
  return {
    type: MAIN.ADD_MESSAGE_HANDLER,
    message,
  };
};

export const deleteMessageHandler = (id) => {
  return {
    type: MAIN.DELETE_MESSAGE_HANDLER,
    id,
  };
};

export const clearMessagesHandler = () => {
  return {
    type: MAIN.CLEAR_MESSAGES_HANDLER,
  };
};
