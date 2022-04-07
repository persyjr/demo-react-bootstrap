import React from "react";

const Welcome = (props) => {
	console.log({ props });
	return (
		<h3>
			Bienvenido {props.name} {props.lastname} a 4GeeksAcademy
		</h3>
	);
};

export default Welcome;
