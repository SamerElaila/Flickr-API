import React, { Component } from 'react';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <a className="logo" href="http://www.flickr.com/" target="_blank">
            Flickr
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
