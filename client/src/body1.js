import React, { Component } from 'react';
import './css/body1.css';

// somewhere here i need to do a componentWillRecieveProps to get the 
// props from the jumbo for the handleClick event

class Body1 extends Component {
  render() {
    return (
      <div className="panel-container">
  		<div className="panel">
  			<h1 className="panel-header"> Posts </h1>
  			<p className= "panel-body"> Click on the button above to load the posts!</p>

      	</div>
      	<div className="panel">
  			<h1 className="panel-header"> Comments </h1>
  			<p className= "panel-body"> Select an post to comment on it!</p>
      	</div>

      </div>
    );
  }
}

export default Body1;


// the idea will be to have a button on the left panel which will hide when
// clicked and which will load the articles on the left hand side. once that 
// happens the user will click on one, which will open up the comment box on 
// the right hand side. the user will then be able to comment and they will 
// show up in the previous comments section.

// FOR CLASS //
// my quesiton is do i include all of the js within the components or can
// i have a seperate js file that does the back end stuff? like now that i 
// have the general layout of how i want things set up how do i go about transferring
// the logic. also had trouble figuring how to include a background image

// UPDATE //
// so ive figured out how to get the props to pass at least in this instance.
// ive set a state in the app.js to show the article.js posts initially. 
// im not sure where to write the code for the actual scraping, does that happen
// in the body1.js where the div to input the scraping is??