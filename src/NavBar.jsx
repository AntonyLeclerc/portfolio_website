import React from "react";
import "./NavBar.css";
import AL_logo from "/logos/logo_paint_AL.jpg"

export default function NavBar({ text, change_page }) {
  return (
    <div id="navbar">
      <img src={AL_logo} alt="" id="logo_AL_navbar"/>
      <div id="navbar_right">
        <a
          href="Home"
          onClick={(e) => {
            e.preventDefault();
            change_page("main_page");
          }}
          title="Page d'accueil"
        >
          Home
        </a>

        <a
          href="Projets"
          onClick={(e) => {
            e.preventDefault();
            change_page("project_page");
          }}
          title="Voir mes projets universitaires"
        >
          Projets
        </a>

        <a
          href="Hobbies"
          onClick={(e) => {
            e.preventDefault();
            change_page("hobbies_page");
          }}
          title="Mes passions"
        >
          Passions
        </a>

        <a
          href="Contact"
          onClick={(e) => {
            e.preventDefault();
            change_page("contact_page");
          }}
          title="Me contacter"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
