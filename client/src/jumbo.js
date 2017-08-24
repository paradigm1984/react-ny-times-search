import React, { Component } from 'react';
import './css/jumbo.css';


class Jumbo extends Component {

  constructor(props) {
    super(props);
    this.state={isShowingPosts: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this would make it toggle from the false and true options for isShowingPosts
    this.setState(prevState => ({
      isShowingPosts: !prevState.isShowingPosts
    }));
    console.log("event was triggered");
    // got the click to work, now just have to pass the state to the body1 component
    // click no longer working
  }



  render() {
    return (
      <div className="Jumbo">
        <p className="jumbo-header"> React Web Scraper </p>
        <p className="jumbo-body"> This app will scrape the most recent ______ posts for your enjoyment. Click on one to comment on it!</p>
        <button onClick={this.handleClick} className="article-button"> Show Posts </button>
      </div>
    );
  }
}

export default Jumbo;


// intially want to set the state of the button to isShowingPosts to false
// and then on click show the posts which is located in the body1 component.