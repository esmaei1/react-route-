import React, { Component } from 'react';
import { Link} from "react-router-dom";
import tree from '../tree.jpg';
import { connect } from 'react-redux';

class Home extends Component{

	state = {
		posts: []
	}

	render() {
	 	const { posts } = this.props
		let postList = posts.length !== 0 ? (
			posts.map(post => {
				return (
					<div className="post card" key={ post.id }>
						<div className="card-content">
							<img src={ tree } alt=""/>
							<Link to={ '/' + post.id }>
								<span className="card-title">{ post.title }</span>
							</Link>
							<p>{ post.body }</p>
						</div>
					</div>
				)
			})
		) : (
			<div className="red-text">There is no post yet.</div>
		);


		return(
			<div className="home container">
				<h4 className="center red-text">Home</h4>
				{ postList }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Home);