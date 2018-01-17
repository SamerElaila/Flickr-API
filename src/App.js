import React, { Component } from 'react';
import axios from 'axios';

import Images from './Images';
import Pagination from './Pagination';
import Modal from './modal';
import Header from './Header';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      currentImages: [],
      currentPage: 1,
      modal: false,
      activeImage: '',
      isFetching: false
    };

    this.handlePageOnChange = this.handlePageOnChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.activeImageChanged = this.activeImageChanged.bind(this);
  }

  handlePageOnChange(newPage) {
    const { images } = this.state;
    const startPoint = newPage - 2 === 1 ? 0 : (newPage - 1) * 10;
    const currentImages = images.slice(startPoint, startPoint + 10);
    this.setState({ currentPage: newPage, currentImages });
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  activeImageChanged(newImage) {
    this.setState({ activeImage: newImage, modal: true });
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=technology&api_key=e236207e717c9ea4cf062f14ce87af34&format=json&nojsoncallback=?'
      )
      .then(response => {
        const images = response.data.photos.photo;
        const currentImages = images.slice(0, 10);
        this.setState({ images, currentImages, isFetching: false });
      })
      .catch(err => {
        console.error(err.message);
      });
  }

  render() {
    const {
      images,
      currentImages,
      currentPage,
      modal,
      activeImage,
      isFetching
    } = this.state;

    return (
      <div className="app">
        <Header />
        {modal && <Modal src={activeImage} spanClicked={this.toggleModal} />}
        <Pagination
          numberOfButtons={Math.floor(images.length / 10)}
          currentPage={currentPage}
          onClick={this.handlePageOnChange}
        />
        <Images
          isFetching={isFetching}
          images={currentImages}
          imageClicked={this.activeImageChanged}
        />
        <Pagination
          numberOfButtons={Math.floor(images.length / 10)}
          currentPage={currentPage}
          onClick={this.handlePageOnChange}
        />
      </div>
    );
  }
}

export default App;
