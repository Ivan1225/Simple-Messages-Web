import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/style.css';

export default class ShowList extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    deleteMessage: PropTypes.func.isRequired,
    hasMessages: PropTypes.bool.isRequired,
  };

  deleteMessage = (e, id) => {
    e.preventDefault();
    this.props.deleteMessage(id);
  }

  render() {
    const {
      message,
      hasMessages,
    } = this.props;

    return (
      <div className="row">
        {hasMessages && (<Link className="item-link" to={`/${message._id}/view`} />)}
        <div className="col-md-10">
          <li className="list-group-item clearfix">
            {message.content}
            {hasMessages && (
              <span type="button" onClick={(e) => this.deleteMessage(e, message._id)} className="delete">
                &nbsp;&#10007;&nbsp;
              </span>)
            }
          </li>
        </div>
      </div>
    )
  }
}
