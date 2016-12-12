// Include React 
var React = require('react');
var RC1 = require('./results-c1')

// Create the Results component
// Notice how the header uses .createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Results = React.createClass({
	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h2>Warmup!</h2>
						<p><em>Components and Sub-components</em></p>
					</div>
					{/*This represents the "Parent"*/}
					{/*<div className="col-md-12">*/}
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">Results Parent</h3>
							</div>
							<div className="panel-body text-center">
								{/* This is where we'll show the click count for the parent*/}
								<h2>Hey I'm a Results Parent!</h2>
								{/*Here we'll deploy the child component. We'll pass it the parent's click counter as a "state"*/}
								<RC1 />
							</div>
						</div>
					{/*</div>*/}
				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Results;


	// example 1 - plain component with no other sub components
// var React = require('react');

// // Create the Results component
// // Notice how the header uses .createClass
// // Notice how it uses a render function which specifies what will be displayed by the component
// var Results = React.createClass({
// 	render: function(){
// 		return(
// 			<h1>I'm the Results Component!!</h1>
// 		)
// 	}
// });

// // Export the componen back for use in other files
// module.exports = Results;