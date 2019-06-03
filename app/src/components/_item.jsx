import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/style.css';

export default class ShowList extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deleteMessageHandler: PropTypes.func.isRequired,
    hasMessages: PropTypes.bool.isRequired,
  };

  deleteMessage = (e, index) => {
    e.preventDefault();
    this.props.deleteMessageHandler(index);
  }

  render() {
    const {
      message,
      index,
      hasMessages,
    } = this.props;

    return (
      <div className="row">
        {hasMessages && (<Link className="item-link" to={`/${index}/view`} />)}
        <div className="col-md-10">
          <li className="list-group-item clearfix">
            {message.text}
            {hasMessages && (
              <span type="button" onClick={(e) => this.deleteMessage(e, index)} className="delete">
                &nbsp;&#10007;&nbsp;
              </span>)
            }
          </li>
        </div>
      </div>
    )
  }
}
