import React from "react";

export default function MainPage() {
  return (
    <>
      <div id="presentation">
        <div id="textes">
          <h2>Bienvenue sur mon site !</h2>
          <div id="moi_description">
            <p>
              Je suis Antony LECLERC, passioné de cuisine, de jeux vidéos et
              d'informatique, récemment diplômé du Master ANDROIDE (désormais{" "}
              <a href="https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-informatique/parcours-ai2d">
                AI2D
              </a>
              ) de Sorbonne Université et suis actuellement à la recherche de
              premières opportunités professionnelles dans le domaine du Machine
              Learning / la vision par ordinateur.{" "}
            </p>
            <img src="src/assets/moi.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
