import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<link rel="icon" href="/favicon.ico" />
				<title>Ace Labador | Projects</title>
				<meta
					name="description"
					content="Explore the projects of Ace Labador, a front-end engineer specializing in React & Next.js. Discover innovative web applications and contributions."
				/>
				<meta
					name="keywords"
					content="Ace Labador projects, React projects, Next.js projects, front-end engineer projects, web development projects, JavaScript applications, web applications, portfolio projects, coding examples"
				/>
				<meta name="author" content="Ace Labador" />


				{/* Open Graph Tags for Social Media Sharing */}
				<meta property="og:title" content="Ace Labador's Projects" />
				<meta
					property="og:description"
					content="Discover the projects of Ace Labador, a front-end engineer specializing in React & Next.js."
				/>
				<meta property="og:image" content="/favicon.ico" />
				<meta
					property="og:url"
					content="https://alas-dev.vercel.app/projects"
				/>
				<meta property="og:type" content="website" />

				{/* Twitter Card for Sharing */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Ace Labador's Projects" />
				<meta
					name="twitter:description"
					content="Explore the innovative projects of Ace Labador, a front-end engineer specializing in React & Next.js."
				/>
				<meta name="twitter:image" content="/favicon.ico" />

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
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div
							id="projects-title1"
							className="title projects-title"
						>
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a diverse range of projects over the
							years, and I'm proud of the strides I've made in my
							development journey. My primary tech stack revolves
							around React, Next.js, and Tailwind CSS, which I
							utilize to develop intuitive and responsive
							front-end web apps. On the backend, I leverage BaaS
							platforms like Firebase, Supabase, and Appwrite to
							create seamless full-stack web applications that
							scale effectively. Many of these projects are
							open-source and available for others to explore. If
							you're interested in any of the projects I've worked
							on, please feel free to check them out and suggest
							any improvements or enhancements you might have in
							mind. Collaborating with others is a great way to
							learn and grow, and I'm always open to new ideas and
							feedback.
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
