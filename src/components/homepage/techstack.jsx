// components/homepage/techstack.jsx
import React from "react";
import techData from "../../data/techdata";
import "../homepage/styles/techstack.css"; // Add your custom CSS for the Tech Stack section

const TechStack = () => {
  return (
    <div className="techstack-section">
      <h2 className="techstack-title">My Tech Stack</h2>
      <div className="techstack-container">
        {Object.entries(techData).map(([category, techs]) => (
          <div className="techstack-category" key={category}>
            <h3 className="techstack-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="techstack-items">
              {techs.map((tech) => (
                <div className="techstack-item" key={tech.name}>
                  <img src={tech.logo} alt={`${tech.name} logo`} className="techstack-logo" />
                  <span className="techstack-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
