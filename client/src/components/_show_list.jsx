import React, { Component } from "react";
import PropTypes from 'prop-types';
import Item from '../containers/item';
import '../styles/style.css';

export default class ShowList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    // clearMessagesHandler: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showList: false,
    }
  }
  clearMessages = (e) => {
    e.preventDefault();
    this.props.clearMessagesHandler();
  }

  showListHandler = (e) => {
    e.preventDefault();
    this.setState({
      showList: true,
    })
  }

  hideListHandler = (e) => {
    e.preventDefault();
    this.setState({
      showList: false,
    })
  }

  render() {
    const {
      messages,
    } = this.props;

    const hasMessages = messages.filter(m => !m.initial).length > 0;
    const mes =  messages.filter(m => hasMessages === !m.initial);

    return (
      <div className="container">
        <div className="action-container">
          <input
            className="btn btn-outline-secondary"
            type="button"
            value="Show"
            onClick={this.showListHandler}
          />
          <input
            className="btn btn-outline-secondary"
            type="button"
            value="Hide"
            onClick={this.hideListHandler}
          />
          {/* <input
            className="btn btn-outline-secondary"
            type="button"
            value="Destroy All"
            onClick={this.clearMessages}
          /> */}
        </div>
        {this.state.showList && (
          <div id="message-list-container">
            <ul className="list-group">
              {
                mes.map(message => {
                  console.log(message)
                  return (
                    <div key={message._id}>
                      <Item
                        message={message}
                        hasMessages={hasMessages}
                      />
                    </div>
                  );
                })
              }
            </ul>
          </div>
        )}
      </div>
    );
  }
}
