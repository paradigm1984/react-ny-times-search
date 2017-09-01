import React, { Component } from 'react';
import './css/App.css';
import Header from './header.js';
import Jumbo from './jumbo.js';
import Body1 from './body1.js';
import helpers from "./util/helpers.js";


class App extends Component {

  componentWillMount() {
    helpers.getArticles().then(result=> {
      console.log(result);
    });


      // in here you will put the cheerio info from the front end code you have
      // and append everything to the cooresponding divs. you might have to put a ref tag
      // to get it back to the <Body1 />
      
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
