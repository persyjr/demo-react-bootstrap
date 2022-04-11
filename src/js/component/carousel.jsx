import React from "react";

const Carousel = (props) => {
	console.log({ props });
	return (
		<div
			id="carouselExampleSlidesOnly"
			className="carousel slide"
			data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://picsum.photos/seed/picsum/500/150"
						className="d-block w-100"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://picsum.photos/500/150?grayscale"
						className="d-block w-100"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://picsum.photos/500/150/?blur"
						className="d-block w-100"
						alt="..."
					/>
				</div>
			</div>
			<p>
				<strong>Where does it come from? </strong>Contrary to popular
				belief, Lorem Ipsum is not simply random text. It has roots in a
				piece of classical Latin literature from 45 BC, making it over
				2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more
				obscure Latin words, consectetur, from a Lorem Ipsum passage,
				and going through the cites of the word in classical literature,
				discovered the undoubtable source.
			</p>
			<a href="#" className="btn btn-primary">
				Call to Action!
			</a>
		</div>
	);
};

export default Carousel;
