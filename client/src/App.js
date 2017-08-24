import React, { Component } from 'react';
import './css/App.css';
import Header from './header.js';
import Jumbo from './jumbo.js';
import Body1 from './body1.js';
import helpers from "./util/helpers.js";


class App extends Component {

  componentWillMount() {
    helpers.getPosts().then(res=>{
      // in here you will put the cheerio info from the front end code you have
      // and append everything to the cooresponding divs. you might have to put a ref tag
      // to get it back to the <Body1 />

    })
  }


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
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Jumbo />
        <Body1 />
      </div> 
    );
  }
}

export default App;
