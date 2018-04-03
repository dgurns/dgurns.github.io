import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  render() {
    if (!this.props.visible) { return null; }

    return (
      <div className="modal" onClick={this.props.onClose}>
        {this.props.children}
      </div>
    );
  }
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
