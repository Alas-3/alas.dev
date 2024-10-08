import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/projectStyles.css";

const AllProjects = () => {
    return (
        <div className="all-projects-container">
            {INFO.projects.map((project, index) => (
                <div className="all-projects-project" key={index}>
                    <Project
                        logo={project.logo}
                        logo2={project.logo2}
                        logo3={project.logo3}
                        logo4={project.logo4}
                        title={project.title}
                        description={project.description}
                        linkText={project.linkText}
                        link={project.link}
                    />
                </div>
            ))}
        </div>
    );
};

export default AllProjects;