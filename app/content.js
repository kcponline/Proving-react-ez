	// example 3 - react module and jsx
var React = require('react');
var ReactDOM = require('react-dom');
var moment = require('moment');

var name = "Omar";
var num1 = 1;
var num2 = 2;
var dob = moment("1989-02-14", "YYYY-MM-DD");

module.exports = ReactDOM.render(
	<div className='panel panel-default'>
		<p>Branch 1-JSX - React Module with JSX</p>
		<ol>
			<li>run npm install or npm install webpack -g</li>
			<li>run webpack -w</li>
			<li>open the index.html from public folder in the browser</li>
			<li>for every edit saved, webpack will automatically update to bundle.js</li>
			<li>webpack's update will be logged in the console or terminal</li>
			<li>refresh the webpage to visualize the updates</li>
			<li>for multiple elements, put them in div and must end with comma</li>
			<li>remember to exit webpack with ctrl c when finished</li>
			<li>test1</li>
		</ol>
		<hr />
		<ol>
			{/*Inserted the variables and simple calculations using curly brackets */}
			<h1>My name is {name}. But you can call me...</h1>
			<h1>The JSX Boss!</h1>
			<hr />
			<li>I can do math: {num1 + num2}.</li>
			<li>I can generate random numbers: {Math.floor(Math.random() * 10) + 1  }, 
			{Math.floor(Math.random() * 10) + 1  }, {Math.floor(Math.random() * 10) + 1  }.</li>
			<hr />
			<h1>React with MOMENTS</h1>
			<li>I can even reverse my name: {name.split("").reverse()}</li>
			<li>I was born on {dob.format("MM/DD/YYYY")}</li>
			<li>That makes me: {dob.fromNow(true)} old.</li>
		</ol>
	</div>,
	document.getElementById('app')
)

	// example 2 - react modular extra file
// var React = require('react');
// var ReactDOM = require('react-dom');

// module.exports = ReactDOM.render(
// 	<div className='panel panel-default'>
// 		<p>Branch 1 - React Module Content Rendering</p>
// 		<ol>
// 			<li>run npm install or npm install webpack -g</li>
// 			<li>run webpack -w</li>
// 			<li>open the index.html from public folder in the browser</li>
// 			<li>for every edit saved, webpack will automatically update to bundle.js</li>
// 			<li>webpack's update will be logged in the console or terminal</li>
// 			<li>refresh the webpage to visualize the updates</li>
// 			<li>for multiple elements, put them in div and must end with comma</li>
// 			<li>remember to exit webpack with ctrl c when finished</li>
// 			<li>test1</li>
// 		</ol>
// 	</div>,
// 	document.getElementById('app')
// )

	// example 1 - extra file
// module.exports = "It works from content.js.";