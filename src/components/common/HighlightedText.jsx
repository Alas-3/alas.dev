import React from "react";

const HighlightedText = ({ text, keywords, highlightColor, bold = true }) => {
  // Create a regular expression to match any of the keywords
  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");

  // Split the text into parts and wrap the matching keywords with a <span>
  const parts = text.split(regex).map((part, index) =>
    keywords.includes(part) ? (
      <span
        key={index}
        style={{
          color: highlightColor,
          fontWeight: bold ? "bold" : "normal", // Conditionally set font weight
        }}
      >
        {part}
      </span>
    ) : (
      part
    )
  );

  return <p>{parts}</p>;
};

export default HighlightedText;
