import Axios from 'axios';
import { MAIN } from './action_types';

const apiUrl = 'http://localhost:9000/messages';

export const fetchMessagesSuccess = (data) => {
  return {
    type: MAIN.FETCH_MESSAGES_SUCCESS,
    data
  }
};

export const createMessageSuccess = ({message}) => {
  return {
    type: MAIN.CREATE_MESSAGE_SUCCESS,
    message
  }
};

export const updateMessageSuccess = (id, content) => {
  return {
    type: MAIN.UPDATE_MESSAGE_SUCCESS,
    id,
    content
  }
};
export const deleteMessageSuccess = (id) => {
  return {
    type: MAIN.DELETE_MESSAGE_SUCCESS,
    id
  }
};

export const fetchMessages = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchMessagesSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createMessage = (message) => {
  return (dispatch) => {
    return Axios.post(apiUrl, {content: message})
      .then(response => {
        dispatch(createMessageSuccess(response.data));
        console.log("Successfully create this message");
      })
      .catch(error => {
        console.log(error);
        throw(error);
      });
  };
};

export const updateMessage = ({id, newMessage}) => {
  return (dispatch) => {
    return Axios.put(`${apiUrl}/${id}`, {content: newMessage})
      .then(() => {
        dispatch(updateMessageSuccess(id, newMessage))
        console.log("Successfully update this message");
      })
      .catch(error => {
        console.log(error);
        throw(error);
      });
  };
};

export const deleteMessage = (id) => {
  return (dispatch) => {
    return Axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deleteMessageSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};