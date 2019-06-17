import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';

export default class Detail extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    updateMessage: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.mes = React.createRef();
  }

  goBack = () => {
    this.props.history.push('/');
  }

  update = () => {
    if (this.mes.current.value === '') {
     alert("Message cannot be empty")
    } else {
      const data = {
        id: this.props.message.id,
        newMessage: this.mes.current.value
      };
      this.props.updateMessage(data);
      this.goBack();
    }
  }

  render() {
    return (
      <Fragment>
        <h2>
          Detail
        </h2>
        <div>
          <input
            type="text"
            ref={this.mes}
            defaultValue={this.props.message===undefined ? '' : this.props.message.text}
            required
          />
        </div>
        <input type="button" value="Save and Exit" className="btn btn-outline-secondary" onClick={this.update} />
        <input type="button" value="back" className="btn btn-outline-secondary" onClick={this.goBack} />
      </Fragment>
    )
  }
}