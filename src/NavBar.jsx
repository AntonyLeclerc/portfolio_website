import React from "react";
import "./NavBar.css";
import AL_logo from "/logos/logo_paint_AL.jpg"

export default function NavBar({ text, test }) {
  return (
    <div id="navbar">
      <img src={AL_logo} alt="" id="logo_AL_navbar"/>
      <div id="navbar_right">
        <a
          href="Home"
          onClick={(e) => {
            e.preventDefault();
            test("main_page");
          }}
          title="Page d'accueil"
        >
          Home
        </a>

        <a
          href="Projets"
          onClick={(e) => {
            e.preventDefault();
            test("project_page");
          }}
          title="Voir mes projets universitaires"
        >
          Projets
        </a>

        <a
          href="Hobbies"
          onClick={(e) => {
            e.preventDefault();
            test("hobbies_page");
          }}
          title="Mes passions"
        >
          Passions
        </a>

        <a
          href="Contact"
          onClick={(e) => {
            e.preventDefault();
            test("contact_page");
          }}
          title="Me contacter"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
