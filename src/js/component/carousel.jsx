import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

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
						src="https://picsum.photos/seed/picsum/300/150"
						className="d-block w-100"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://picsum.photos/seed/picsum/300/150"
						className="d-block w-100"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://picsum.photos/seed/picsum/300/150"
						className="d-block w-100"
						alt="..."
					/>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
