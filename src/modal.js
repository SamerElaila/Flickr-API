import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './modal.css';

class Modal extends Component {
  render() {
    const { src, spanClicked } = this.props;
    return (
      <div className="modal">
        <div className="modal__content">
          <span className="modal__close-span" onClick={spanClicked}>
            &times;
          </span>
          <img className="modal__img" src={src} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string
};

export default Modal;
