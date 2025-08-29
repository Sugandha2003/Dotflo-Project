import React, { Component } from 'react';
import './spinner.css'; // Import your spinner styles here

class Spinner extends Component {
  render() {
    return (
        <div class="loader">
        <div class="spinner">
          <div class="circle"></div>
          <div class="square"></div>
          <div class="triangle"></div>
          <div class="star"></div>
        </div>
      </div>
      
    );
  }
}

export default Spinner;
