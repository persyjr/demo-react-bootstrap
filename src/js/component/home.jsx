import React from "react";

//include images into your bundle
import Nav from "./nav.jsx";
import Carousel from "./carousel.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<div className="container">
				<div className="row">
					<div className="col">
						<Carousel />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
