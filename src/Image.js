import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './image.css';

class Image extends Component {
  render() {
    const { src, imageClicked } = this.props;

    return (
      <div className="image" onClick={event => imageClicked(src)}>
        <img src={src} />
      </div>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string
};

export default Image;
