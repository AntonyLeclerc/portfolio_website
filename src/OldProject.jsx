import React, { useState } from "react";

export default function Project({ description, image }) {
  const [detailed, setDetailed] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("down");

  return (
    <div className="project_bloc">
      <div className="small_bar">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          className={`project_arrow ${arrowDirection === "up" ? "up" : "down"}`}
          state={arrowDirection}
          onClick={(e) => {
            arrowDirection === "down"
              ? setArrowDirection("up")
              : setArrowDirection("down");
          }}
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#FFFFFF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
