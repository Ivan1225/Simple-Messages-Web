import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';

export default class Detail extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
  };

  goBack = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <Fragment>
        <h2>
          Detail
        </h2>
        <div>
          {this.props.message}
        </div>
        <input type="button" value="back" className="btn btn-outline-secondary" onClick={this.goBack} />
      </Fragment>
    )
  }
}