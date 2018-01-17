import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

import Image from './Image';

import './images.css';

class Images extends Component {
  render() {
    const { images, imageClicked, isFetching } = this.props;

    return isFetching ? (
      <div className="images__spinner-wrapper">
        <ClipLoader color={'#272628'} loading={true} />
      </div>
    ) : (
      <div className="images">
        {images.map(image => (
          <Image
            imageClicked={imageClicked}
            key={image.id}
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${
              image.id
            }_${image.secret}.jpg`}
          />
        ))}
      </div>
    );
  }
}

Images.propTypes = {
  images: PropTypes.array
};

export default Images;
