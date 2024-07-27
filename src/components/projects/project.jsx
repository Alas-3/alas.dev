import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, logo2, logo3, logo4, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link} target="_blank" rel="noopener noreferrer">
					<div className="project-container">
						<div className="project-logo">
							{logo && <img src={logo} alt="logo" />}
							{logo2 && <img src={logo2} alt="logo2" />}
							{logo3 && <img src={logo3} alt="logo3" />}
							{logo4 && <img src={logo4} alt="logo4" />}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
