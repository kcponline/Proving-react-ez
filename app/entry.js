	// example 7 - react rendering modular extra file
var contents = require("./content.js");
module.exports = contents;

	// example 6 - simple boot strap className
// var React = require('react');
// var ReactDOM = require('react-dom');

// ReactDOM.render(
// 	<div className='panel panel-default'>
// 		<p>Hello Kent, I can edit this on the fly with react !</p>
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

	// example 5 of react setup
	// This code renders a simple "Hello Kent...etc".
	// ReactDOM takes in two parameters (a single HTML div or element and the HTML target where it will be rendered)
	// The code here will run through webpack and be compiled into plain Javascript 
	// The compiled code will be appended into the index.html file in the id called "app"
	// a block or multiple lines of html codes must be wrapped inside a <div></div> container
// var React = require('react');
// var ReactDOM = require('react-dom');

// ReactDOM.render(
// 	<div>
// 		<p>Hello Kent, I can edit this on the fly with react !</p>
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

	// example 4 of when css extension is bind
// require("../assets/css/style.css");
// document.write(require("./content.js"));

	// example 3 of css styling and extra file
// require("!style!css!../assets/css/style.css");
// document.write(require("./content.js"));

	// example 2 extra file content.js routing test of modules. only entry.js
	// is executed and requires all other modules
	// the path remains the same even when moved together
	// with the main entry.js file
	// the cli has to be webpack ./app/entry.js bundle.js
// document.write(require("./content.js"));

	// example 1 initial entry.js bundling test with single file
// document.write("It works. The edit bundling is working");