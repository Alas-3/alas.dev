// src/pages/homepage.jsx

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faLinkedin,
	faGithub,
	//faStackOverflow,
	//faInstagram,
	//faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import TechStack from "../components/homepage/techstack"; // Import new TechStack component
import HighlightedText from "../components/common/HighlightedText"; // Import the new component

import INFO from "../data/user";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);
			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	// Keywords to highlight
	const keywords = [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Next.js",
		"Tailwind",
		"Firebase",
		"Supabase",
		"Web",
		"Developer",
		"Front-End",
		"Engineer",
	];
	const highlightColor = "#14b8a6"; // Define the color for highlighted text

	return (
		<React.Fragment>
			<Helmet>
				<link rel="icon" href="/favicon.ico" />
				<title>Ace Labador | Portfolio</title>
				<meta
					name="keywords"
					content="Alas Dev, Ace Labador, Christopher Ace Labador, Ace Labador portfolio, Ace Labador front-end developer, front-end engineer, React developer, Next.js expert, JavaScript developer, web developer, web development, modern web development, responsive design, UI/UX developer, Firebase developer, Supabase expert, full-stack developer, React portfolio, Next.js portfolio, Ace Labador projects, Ace Labador resume, software engineer, web applications, JavaScript engineer, Alas personal website, Ace Labador front-end portfolio, Ace Labador developer, web design, web performance optimization, mobile-responsive web design, SEO expert, Next.js SEO, Ace Labador coding projects, Meycauayan, Bulacan, React coding examples, interactive web applications, progressive web apps, Ace Labador GitHub, Ace Labador LinkedIn"
				/>

				<meta name="author" content="Ace Labador" />
				<link rel="canonical" href="https://alas-dev.vercel.app" />

				{/* Open Graph Tags for Social Media Sharing */}
				<meta property="og:title" content="Alas' Portfolio" />
				<meta
					property="og:description"
					content="Showcasing projects and skills of Alas, a front-end engineer specializing in React & Next.js."
				/>
				<meta property="og:image" content="images/webprofile.png" />
				<meta property="og:url" content="https://alas-dev.vercel.app" />
				<meta property="og:type" content="website" />

				{/* Twitter Card for Sharing */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Alas' Portfolio" />
				<meta
					name="twitter:description"
					content="Explore the portfolio of Alas, a front-end engineer specializing in React & Next.js."
				/>
				<meta name="twitter:image" content="/images/webprofile.png" />

				{/* Robots */}
				<meta name="robots" content="index, follow" />

				{/* Google Site Verification */}
				<meta
					name="google-site-verification"
					content="OBwTnzCJhtTRTGjraMYwzcyuh6-Q9XyE-bb0rxaAzOw"
				/>

				{/* JSON-LD for structured data (REMOVED) */}
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<HighlightedText
										text={INFO.homepage.title}
										keywords={keywords}
										highlightColor={highlightColor}
									/>
								</div>

								<div className="subtitle homepage-subtitle">
									<HighlightedText
										text={INFO.homepage.description}
										keywords={keywords}
										highlightColor={highlightColor}
									/>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href="assets/ResumeV2.pdf"
								target="_blank"
								rel="noreferrer"
								className="resume-button"
							>
								Resume
							</a>

							<span className="social-separator">|</span>

							<a
								href={INFO.socials.credly}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faCertificate}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-techstack">
							<TechStack />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
