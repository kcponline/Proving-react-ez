// Include React 
var React = require('react');

// Here we include all of the sub-components
var RC1a = require('./results-c1a');

//Class Main extends Component {}

// This is the main component. It includes the banner and button.
var RC1 = React.createClass({

	// Here we set a generic set of states associated with our Main Component
	getInitialState: function(){
		return {
			name: "Bob",
			age: 104,
			artistry: 94,
			isFuzzy: true,
			img: "http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzOTU5NTgxMTk2.jpg"
		}
	},

	// Here we render the function
	render: function(){
		return(
			<div className="container">
				<div className="row">
				<h3>Everything below is this child component RC1</h3>
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="jumbotron">
							<h1>Bob and Bob II</h1>
							<h2>A lesson on props, states, parents, and children </h2>
							<h3>Everything in this jumbotron is static string of this child component RC1</h3>
						</div>
					</div>
					<div className="col-md-1"></div>
				</div>
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-5">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">{this.state.name}</h3>
							</div>
							<div className="panel-body text-center">
								{/* This is where we'll show the click count for the parent*/}
								<h1>This is: {this.state.name}</h1>
								<h2>{this.state.name} is a fantastic artist</h2>
								<h3>Everything in this panel-body is static initialstate of this child component RC1</h3>
								<hr />
								<h2>Age: {this.state.age}</h2>
								<h2>Fuzziness: {this.state.isFuzzy.toString()}</h2>
								<h2>Artistry: {this.state.artistry}</h2>
								<h3>Everything in this panel-body is static initialstate of this child component RC1</h3>
							</div>
						</div>
					</div>
					<div className="col-md-5">
						<div className="panel panel-default">
							<div className="panel-body text-center">
								<img src={this.state.img} width="100%"/>
								<h3>Everything in this panel-body is static initialstate of this child component RC1</h3>
							</div>
						</div>
					</div>
					<div className="col-md-1"></div>
				</div>
				<div className="row">
					<h3>Everything below is grandchild required component RC1a</h3>
					<div className="col-md-1"></div>
					<RC1a dadsAge={this.state.age} dadsFuzzy={this.state.isFuzzy} dadsArtistry={this.state.artistry}/>
					<div className="col-md-1"></div>
				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = RC1;