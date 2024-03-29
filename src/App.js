/*
    App.js
    ===========
    Primary React entry point
*/

import React from 'react';
import NumberInputField from './components/NumberInputField';
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* This row is for the header and site description */}
        <div className="row">
          <div className="col-sm">
            <h1 className="header">MedianPrimes</h1>
            <p className="description">Enter a number and click submit. You will receive the median element(s) of the list of primes under that number.</p>
          </div>
        </div>
        {/* This row is just for the number input */}
        <div className="row">
          <NumberInputField />
        </div>
        <div className="row">
          <div className="col-sm">
            <footer className="footer">
              <h6>Developed by dgagnonk. <a href="http://www.github.com/dgagnonk" target="_blank">GitHub</a></h6>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
