import React from "react";
import Media from "./Media";

export default function Contact() {
  return (
      <div id="contacts">
      <Media
        above_text="Vous pouvez retrouver mes projets universitaires sur Github"
        id="github_contact"
        image="src/assets/github-white-icon.webp"
        text="Github"
        linkto="https://github.com/AntonyLeclerc"
      />

      <Media
        above_text="Aller consulter ma page Linkedin"
        id="linkedin_contact"
        image="src/assets/linkedin-app-white-icon.webp"
        text="Linkedin"
        linkto="https://www.linkedin.com/in/antony-leclerc-44848b255/"
      />

      <Media
        above_text="Ou me contacter par email !"
        id="email_contact"
        image="src/assets/email-envelope-white-icon.webp"
        text="Email"
        linkto="mailto:leclerc.antony.pro@gmail.com"
      />
      </div>
  );
}
