// Include React 
var React = require('react');

// Create the GrandChild Component
var RC1a = React.createClass({

	// Here we set a generic set of states associated with our Child Component
	getInitialState: function(){
		return {
			name: "Bob II",
			img: "http://www.rockstyle-baby.com/wordpress/wp-content/uploads/2013/04/Punk_kid_boy_son_of_anarchy1.jpg"
		}
	},

	// Here we render the function
	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">
								{this.state.name}</h3>
							</div>
							<div className="panel-body text-center">
								{/* This is where we'll show the click count for the parent*/}
								<h1>This is: {this.state.name}</h1>
								<h2>{this.state.name} is a terrible artist</h2>
								<h3>Everything in this panel-body is static 
								initialastate of grandchild component RC1a</h3>
								<hr />
								<h2>Age: {this.props.dadsAge / 8}</h2>
								<h2>Fuzziness: 
								{(!(this.props.dadsFuzzy)).toString()}</h2>
								<h2>Artistry: {this.props.dadsArtistry / 10}</h2>
								<h3>Everything in this panel-body is dynamic 
								state of child component RC1</h3>
							</div>
						</div>
					</div>
					<div className="col-md-5">
						<div className="panel panel-default">
							<div className="panel-body text-center">
								<img src={this.state.img} width="100%"/>
								<h3>Everything in this panel-body is static 
								initialastate of grandchild component RC1a</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = RC1a;