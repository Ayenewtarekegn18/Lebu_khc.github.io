import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { useState, useEffect } from 'react';

function Gallery() {
  return (
    <div className="slider">
    <ul>
      {/* <li className={currentIndex === 0 ? 'active' : ''}>
        <img src="image1.jpg" alt="Image 1" />
        <h3>Image 1 Title</h3>
        <p>Image 1 Description</p>
      </li>
      <li className={currentIndex === 1 ? 'active' : ''}>
        <img src="image2.jpg" alt="Image 2" />
        <h3>Image 2 Title</h3>
        <p>Image 2 Description</p>
      </li>
      <li className={currentIndex === 2 ? 'active' : ''}>
        <img src="image3.jpg" alt="Image 3" />
        <h3>Image 3 Title</h3>
        <p>Image 3 Description</p>
      </li> */}
    </ul>
  </div>
  );
};
export default Gallery;
