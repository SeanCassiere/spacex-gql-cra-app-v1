import React from "react";

const HomeJumbotron = () => {
	return (
		<div className='container mt-4'>
			<div className='jumbotron'>
				<h1 className='display-4'>SpaceX Portal</h1>
				<p className='lead'>
					This is a Apollo Client loading data from my graphql backend.
				</p>
				<p className='lead'>
					<a
						className='btn btn-primary btn-md'
						href='http://localhost:4000/graphql'
						target='_blank'
						rel='noreferrer'
					>
						Apollo Playground
					</a>
				</p>
			</div>
		</div>
	);
};

export default HomeJumbotron;
