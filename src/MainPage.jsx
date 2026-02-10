import React from "react";
import moi_img from "../src/assets/moi.jpg"

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
              <a target="_blank" href="https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-informatique/parcours-ai2d">
                AI2D
              </a>
              ) de Sorbonne Université et suis actuellement à la recherche de
              premières opportunités professionnelles dans le domaine du Machine
              Learning / la vision par ordinateur.{" "}
            </p>
            <img src={moi_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
