import React from "react";
import Project from "./Project";

export default function ProjectPage() {
  return (
    <div id="projets">
      <Project
        title="Projet de recherche de M2 (Mars 2025 - Août 2025)"
        location="IRCAM"
        location_ws="https://www.ircam.fr/"
        subtitle="DeTOX - Lutte contre les vidéos hyper-truquées de personnalités françaises."
        description="Mise en place d'une pipeline permettant la génération d'un Deepfake audio et vidéo d'une personnalité Française, pour permettre par la suite l'entraînement d'autres réseaux de neurones destinés à détecter si une vidéo d'une personnalité est réelle ou non."
        image="/projects/deepfake.png"
        linkto="https://github.com/AntonyLeclerc/Stage/tree/main"
        videolink="https://youtu.be/rmTC4dMQU3k"
      />

      <Project
        title="Stage de M1 (Juillet 2024 - Août 2024)"
        location="LIP 6"
        locaiton_ws="https://www.lip6.fr/"
        subtitle="Reconnaissance de numéros sur surface sphérique, et application au LOTO"
        predescription="Dans la continuité d'un projet de recherche de M1 ayant eu lieu de Janvier 2024 à Mai 2024, j'ai eu l'occasion de poursuivre ce projet en stage."
        description="Utilisation de réseaux de neurones convolutionnels (CNN) pour pouvoir reconnaitre des numéros sur des surfaces sphériques (non planes), et application au tirage du LOTO, les tirages actuels se faisant avec des micro puces à l'intérieur des boules pour éviter toute triche, implique un coût supplémentaire sur le long terme, recherche d'une solution par intelligence artificielle."
        image="/projects/projetM1Loto.png"
        linkto="https://github.com/AntonyLeclerc/ProjetLoto/tree/main"
      />
    </div>
  );
}
