import React from "react";

function article_1() {
	return {
		date: "10 October 2024",
		title: "Eregistrar",
		description:
			"A queue ticketing system kiosk",
		keywords: [
			"eregistrar",
			"ace",
			"ace l",
			"ace labador",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "10 October 2024",
		title: "E-Registrar",
		description:
			"A queue ticketing kiosk system",
		style: ``,
		keywords: [
			"eregistrar",
			"ace",
			"ace l",
			"ace labador",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
