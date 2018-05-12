import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './pagination.css';

class Pagination extends Component {
  render() {
    const { numberOfButtons, onClick, currentPage } = this.props;
    const textContents = [];
    for (let i = 1; i <= numberOfButtons; ++i) textContents.push(i);

    return (
      <div className="pagination">
        <button
          className="button"
          type="button"
          onClick={() => {
            console.log(currentPage);
            const newPage =
            currentPage === 1 ? numberOfButtons : currentPage - 1;
            onClick(newPage);
          }}
        >
          &laquo;
        </button>
        {textContents.map(textContent => (
          <button
            className={classNames({
              button: 'true',
              'button--active': textContent === currentPage
            })}
            key={textContent}
            typ="button"
            onClick={event => {
              onClick(parseInt(event.target.textContent));
            }}
          >
            {textContent}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            const newPage =
              currentPage === numberOfButtons ? 1 : currentPage + 1;
            onClick(newPage);
          }}
        >
          &raquo;
        </button>
      </div>
    );
  }
}

Pagination.propTypes = {
  numberOfButtons: PropTypes.number,
  onClick: PropTypes.func,
  currentPage: PropTypes.number
};

export default Pagination;
