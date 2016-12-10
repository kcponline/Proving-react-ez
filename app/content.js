
	// example 2 - react modular extra file
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = ReactDOM.render(
	<div className='panel panel-default'>
		<p>Hello Kent, I can edit this on the fly with react !</p>
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
	</div>,
	document.getElementById('app')
)

	// example 1 - extra file
// module.exports = "It works from content.js.";