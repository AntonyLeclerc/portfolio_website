import React, { useState } from "react";

export default function Project({
  title,
  subtitle,
  description,
  image,
  desc,
  linkto,
  videolink,
}) {
  const [arrowDirection, setArrowDirection] = useState("down");

  return (
    <div className="project_bloc">
      <div className="project_description">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <p>
          En savoir plus sur <a href={linkto} target="_blank">github</a>
        </p>
        {videolink && (
          <p>
            Exemple de la vidéo ci contre sur{" "}
            <a href="https://youtu.be/rmTC4dMQU3k" target="_blank">YouTube</a>
          </p>
        )}
      </div>
      <div className="project_image">
        {image && <img src={image} alt={desc} />}
      </div>
    </div>
  );
}
