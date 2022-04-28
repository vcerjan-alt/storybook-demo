import React from 'react';
import PropTypes from 'prop-types';

import './testCard.css';

export const TestCard = ({ onClick }) => (
  <div className='container'>
    <p className='role'>Seppo Contributor</p>
    <h2 className='title'>Forever free</h2>
    <div className='subtitle-container'>
      <p className='label'>Help build and moderate</p>
      <p className='label'>games to aid Seppo Creators.</p>
    </div>
    <button className='button' onClick={onClick}>Read more</button>
    <div className='merrits-list-wrapper'>
      <div className='merrits-item-wrapper'>
        <div className='checkmark'/>
        <p className='text'>View games being built</p>
      </div>
      <div className='merrits-item-wrapper'>
        <div className='checkmark'/>
        <p className='text'>Add comments</p>
      </div>
      <div className='merrits-item-wrapper'>
        <div className='checkmark'/>
        <p className='text'>View player progress</p>
      </div>
      <div className='merrits-item-wrapper'>
        <div className='checkmark'/>
        <p className='text'>Rate and rank answers</p>
      </div>
    </div>
  </div>
);

TestCard.propTypes = {
  /**
   * Read more button navigates to Seppo Contributor details page
   */
  onClick: PropTypes.func.isRequired,
};

TestCard.defaultProps = {
};
