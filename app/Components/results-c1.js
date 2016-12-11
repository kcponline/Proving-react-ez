// Include React 
var React = require('react');

// Here we include all of the sub-components
var RC1a = require('./results-c1a');

// Create the Child Component
var RC1 = React.createClass({
	render: function(){
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Child</h3>
				</div>
				<div className="panel-body text-center">
					{/* This is a child!*/}
					<h3>HEY I'm the Child!</h3>
					{/* This is the child module */}
					<RC1a />
				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = RC1;