import React from "react";

const Card = (props) => {
	console.log({ props });
	return (
		<div className="card">
			<img
				src="https://picsum.photos/200"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					Find out More!
				</a>
			</div>
		</div>
	);
};

export default Card;
