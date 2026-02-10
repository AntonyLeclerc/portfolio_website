import React from "react";

export default function Media({above_text, image, text, linkto }) {
  return (
    <>
      <p className="upper_text">{above_text}</p>
    <a href={linkto} {...(text === "CV" ? {download: true} : {})}>
      <div className="media_link">
        <img className="media_icon" src={image} />
        <p>{text}</p>
      </div>
      </a>
      </>
  );
}
