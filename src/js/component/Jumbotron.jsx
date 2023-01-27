import React from "react";
import PropTypes from "prop-types";
import "../../styles/custom.css"

export const Jumbotron = props => {
	return (
		
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				target="_blank"
				rel="noreferrer"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.defaultProps = {
	title: "Bienvenidos a mi landing page!!!",
	description: "España tiene infinidad de rutas de senderismo imponentes para todos los niveles y preferencias.",
	buttonLabel: "Turismo",
	buttonURL: "https://turismo.gob.es/es-es/Paginas/Index.aspx"
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};