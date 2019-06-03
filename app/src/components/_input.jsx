import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../styles/style.css';

export default class Input extends Component {
  static propTypes = {
    addMessageHandler: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  changeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  submitMessage = (e) => {
    e.preventDefault();
    this.props.addMessageHandler({ text: this.state.text });

    this.setState({
      text: '',
    });
  }

  clearMessage = (e) => {
    e.preventDefault();
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div className="input-container">
        <div className="input-group">
          <input
            className="form-control"
            id="message-input"
            type="text"
            placeholder="Please enter a message"
            onChange={this.changeText}
            value={this.state.text}
          />
          <div className="input-group-append">
            <input
              className="btn btn-outline-secondary"
              id="submit"
              type="button"
              value='ADD'
              onClick={this.submitMessage}
            />
            <input
              className="btn btn-outline-secondary"
              type="button"
              value="Clear"
              onClick={this.clearMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}
