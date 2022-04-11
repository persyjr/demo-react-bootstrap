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
						<Card
							title="Title 1"
							text="Some quick example text to build 
						on the card title and make
					up the bulk of the card's content."
						/>
					</div>
					<div className="col">
						<Card
							title="Title 2"
							text="Lorem Ipsum is simply 
						dummy text of the printing and typesetting industry.
						 Lorem Ipsum has been the industry's standard dummy 
						 text ever since the 1500s."
						/>
					</div>
					<div className="col">
						<Card
							title="Title 3"
							text="It is a long established fact that a reader 
						will be distracted by the readable content of a page when 
						looking at its layout"
						/>
					</div>
					<div className="col">
						<Card
							title="Title 4"
							text="when an unknown printer took a galley 
						of type and scrambled it to make a type specimen book."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
