import React from 'react';
import PropTypes from 'prop-types';

export default class Detail extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return (
      <span>
        {this.props.message}
      </span>
    )
  }
}