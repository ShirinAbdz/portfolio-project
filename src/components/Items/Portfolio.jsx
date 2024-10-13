import React from "react";

function Portfolio({ portfolio: { path, id, name, category, image, slug } }) {
  return (
    <a href={path} target="_blank" rel="noreferrer">
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          <span className="term">{category.join(",  ")}</span>
        </div>
        <span className="plus-icon">+</span>
        <div className="thumb">
          <img src={image} alt={name} />
          <div className="mask"></div>
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
