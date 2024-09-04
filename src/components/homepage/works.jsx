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
								src="https://t3.ftcdn.net/jpg/03/72/27/48/360_F_372274822_u3edzJNGguqI4gVBdw9CozfdoaqatWAd.jpg"
								alt="Freelance"
								className="work-image"
							/>
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/D4D0BAQHsM-oJ_0AVcQ/company-logo_100_100/0/1702416872427?e=1726099200&v=beta&t=ybYqBv0z4Sj398rCdT7YMNOHP95tNb63TbTfatSyxtk"
								alt="wewhiten"
								className="work-image"
							/>
							<div className="work-title">WeWhiten</div>
							<div className="work-subtitle">
								Social Media Marketer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
