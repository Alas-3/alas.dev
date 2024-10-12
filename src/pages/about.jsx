import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import CERTIFICATES from "../data/certificates";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<link rel="icon" href="/favicon.ico" />
				<title>Ace Labador | About</title>
				<meta
					name="description"
					content="Learn more about Ace Labador, a front-end engineer specializing in React & Next.js. Discover my journey, skills, and passion for web development."
				/>
				<meta
					name="keywords"
					content="About Ace Labador, Ace Labador biography, Ace Labador portfolio, front-end engineer, React developer, Next.js developer, web developer, web development, UI/UX developer, software engineer"
				/>
				<meta name="author" content="Ace Labador" />
				<link
					rel="canonical"
					href="https://alas-dev.vercel.app/about"
				/>

				{/* Open Graph Tags for Social Media Sharing */}
				<meta property="og:title" content="About Ace Labador" />
				<meta
					property="og:description"
					content="Discover the background and skills of Ace Labador, a front-end engineer specializing in React & Next.js."
				/>
				<meta property="og:image" content="/favicon.ico" />
				<meta
					property="og:url"
					content="https://alas-dev.vercel.app/about"
				/>
				<meta property="og:type" content="website" />

				{/* Twitter Card for Sharing */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="About Ace Labador" />
				<meta
					name="twitter:description"
					content="Learn more about Ace Labador, a front-end engineer specializing in React & Next.js."
				/>
				<meta name="twitter:image" content="/favicon.ico" />

				{/* Robots */}
				<meta name="robots" content="index, follow" />

				{/* Google Site Verification */}
				<meta
					name="google-site-verification"
					content="OBwTnzCJhtTRTGjraMYwzcyuh6-Q9XyE-bb0rxaAzOw"
				/>

				<link
					rel="preload"
					href="/images/personal_logo.png" // Update the path if needed
					as="image"
				/>
				{/* JSON-LD for structured data */}
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
											src="/images/personal_logo.png"
											alt="Ace Labador - Personal Logo"
											className="about-image"
											loading="lazy"
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
							<h2>My Certificates</h2>
							<div className="certificates-grid">
								{CERTIFICATES.map((cert, index) => {
									const CardContent = (
										<div className="card-container">
											<div className="certificate-info">
												<div className="certificate-header">
													{cert.logo && (
														<img
															src={cert.logo}
															alt={`${cert.issuer} logo`}
															className="certificate-logo"
														/>
													)}
													<div>
														<div className="certificate-title">
															{cert.title}
														</div>
														<div className="certificate-issuer">
															Issued by:{" "}
															<span className="bold-text">
																{cert.issuer}
															</span>{" "}
															| Issued:{" "}
															<span className="bold-text">
																{cert.date}
															</span>
														</div>
													</div>
												</div>

												{cert.description && (
													<div className="certificate-description">
														{cert.description}
													</div>
												)}
											</div>
										</div>
									);

									return cert.link ? (
										<a
											key={index}
											href={cert.link}
											target="_blank"
											rel="noopener noreferrer"
											className="card"
										>
											{CardContent}
										</a>
									) : (
										<div key={index} className="card">
											{CardContent}
										</div>
									);
								})}
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
