import React, { useState } from "react";

import "../scss/components/TimeLine.scss";

function TimeLine({ alt, title, dateTimeline, icon, institution, pdfLink }) {
  const [textHover, setTextHover] = useState("");
  const handleMouseEnter = () => {
    setTextHover(true);
  };

  const handleMouseLeave = () => {
    setTextHover(false);
  };
  return (
    <article className="education__timeline">
      <figure>
        <img src={icon} alt={alt} />
      </figure>
      <div className="container">
        <div className="container__text">
          <a
            className={`link-pdf ${textHover ? "hovered" : ""}`}
            href={pdfLink}
            target="_blank"
            download
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {textHover ? "Descargar certificación" : title}
          </a>
          <small>
            {dateTimeline}
            <span>{" " + institution}</span>
          </small>
          <span className="container-arrow"></span>
        </div>
      </div>
    </article>
  );
}

export { TimeLine };
