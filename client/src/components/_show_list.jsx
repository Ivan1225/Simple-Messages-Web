import React, { Component } from "react";
import PropTypes from 'prop-types';
import Item from '../containers/item';
import '../styles/style.css';

export default class ShowList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    initialMessages: PropTypes.array.isRequired,
    clearMessagesHandler: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      showList: false,
      messages: [],
    }
  }

  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false });
        return response;
      })
      .then((response) => response.json())
      .then((messages) => this.setState({ messages }))
      .catch(() => this.setState({ hasErrored: true }));
  }

  componentDidMount() {
    this.fetchData('http://localhost:9000/messages');
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
      initialMessages,
    } = this.props;

    const hasMessages = messages.length > 0;
    const mes = hasMessages ? messages : initialMessages;

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
          <input
            className="btn btn-outline-secondary"
            type="button"
            value="Destroy All"
            onClick={this.clearMessages}
          />
        </div>
        {this.state.showList && (
          <div id="message-list-container">
            <ul className="list-group">
              {
                mes.map((message, i) => {
                  return (
                    <div key={i}>
                      <Item
                        message={message}
                        index={i}
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
