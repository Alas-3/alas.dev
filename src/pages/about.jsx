import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import CERTIFICATES from "../data/certificates"; 

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="https://avatars.githubusercontent.com/u/87595218?v=4"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>

						<div className="certificates-section">
							<h2>My Certifications</h2>
							<div className="certificates-grid">
								{CERTIFICATES.map((cert, index) => (
									<div key={index} className="card"> 
										<div className="card-container">
											<div className="certificate-info">
												<div className="certificate-header">
													{cert.logo && (
														<img src={cert.logo} alt={`${cert.issuer} logo`} className="certificate-logo" />
													)}
													<div>
														<div className="certificate-title">{cert.title}</div>
														<div className="certificate-issuer">Issued by: {cert.issuer}</div>
													</div>
												</div>
												<div className="certificate-date">Date: {cert.date}</div>
												{cert.description && (
													<div className="certificate-description">{cert.description}</div>
												)}
											</div>
											{cert.link && (
												<a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
													View Certificate
												</a>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
