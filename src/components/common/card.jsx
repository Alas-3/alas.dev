import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";

const Card = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="card-home">
			<div className="card-container-home">
				<div className="card-header-home">
					<div className="card-icon-home">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div className="card-title-home">{title}</div>
				</div>
				<div className="card-body-home">
					<div className="card-text">{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
