import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import "./styles/footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-column about-us">
					<h3>About Alas.dev</h3>
					<p>
						Christopher Ace Labador: A Front-End Engineer specializing in React and Next.js.
						Explore my portfolio showcasing web development skills,
						certificates, works and projects.
					</p>
				</div>

				<div className="footer-column quick-links">
					<h3>Quick Links</h3>
					<ul className="footer-nav-link-list">
						<li>
							<a
								href="/"
								className="hover-link"
								title="Return to the homepage"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="/about"
								className="hover-link"
								title="Learn more about me"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="/projects"
								className="hover-link"
								title="View my projects"
							>
								Projects
							</a>
						</li>
					</ul>
				</div>

				<div className="footer-column connect-us">
					<h3>Connect With Me</h3>
					<div className="footer-social-icons">
						<a
							href="https://www.facebook.com/ace.labador.3"
							className="hover-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Facebook
								size={24}
								color="#14b8a6"
								className="social-icon"
							/>
						</a>
						<a
							href="https://x.com/Ac3Labador"
							className="hover-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Twitter
								size={24}
								color="#14b8a6"
								className="social-icon"
							/>
						</a>
						<a
							href="https://www.instagram.com/ac3labador/"
							className="hover-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram
								size={24}
								color="#14b8a6"
								className="social-icon"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/alasdev/"
							className="hover-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin
								size={24}
								color="#14b8a6"
								className="social-icon"
							/>
						</a>
						<a
							href="https://github.com/Alas-3"
							className="hover-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github
								size={24}
								color="#14b8a6"
								className="social-icon"
							/>
						</a>
					</div>
				</div>
			</div>

			<div className="footer-credits">
				<p>
					&copy; {new Date().getFullYear()} Alas.dev. All Rights
					Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
