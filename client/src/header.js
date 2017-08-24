import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <p className="header"> React Scraper </p>
          <a className="navigation-link" href=""> About </a>
          <a className="navigation-link" href="https://github.com/paradigm1984/news-scraper"> Github Repo </a>
        </div>   
      </div>
    );
  }
}

export default Header;
