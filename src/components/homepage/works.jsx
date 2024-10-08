import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlxGEa_lx4b8-5QFW2a8vwTxXwLFkCjN2xQ&s"
								alt="Freelance"
								className="work-image"
							/>
							<div className="work-title">D.R.A Jewelry</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">Sep 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BHhskCCwnOZI_ZfbX6suvMUonVnUKwSm2w&s"
								alt="wewhiten"
								className="work-image"
							/>
							<div className="work-title">WeWhiten</div>
							<div className="work-subtitle">
								Social Media Marketer
							</div>
							<div className="work-duration">Jun 2023 - Jun 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
