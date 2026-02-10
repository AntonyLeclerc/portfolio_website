import React from "react";
import Hobby from "./Hobby";

const exemples_plats = [
  {
    item_name: "Curry Japonais",
    img_path: "src/assets/manger/curry.jpg",
    wiki_link: "https://fr.wikipedia.org/wiki/Curry_japonais",
  },
  {
    item_name: "Gyozas",
    img_path: "src/assets/manger/gyozas.png",
    wiki_link: "https://fr.wikipedia.org/wiki/Jiaozi",
  },
];

const exemples_jeux = [
  {
    item_name: "Clair Obscur - Expédition 33",
    img_path: "src/assets/jeux/co_e33.webp",
    wiki_link: "https://fr.wikipedia.org/wiki/Clair_Obscur:_Expedition_33",
  },
  {
    item_name: "Hades II",
    img_path: "src/assets/jeux/hades2.jpeg",
    wiki_link: "https://fr.wikipedia.org/wiki/Hades_II",
  },
];

export default function Hobbies() {
  return (
    <>
      <div id="hobbies">
        <Hobby
          hobbyName="Cuisine"
          liste_hobby={exemples_plats}
          description="La cuisine est une passion qui m’accompagne depuis longtemps dans ma vie. J’aime l’idée de pouvoir transformer des produits simples et frais en plats réconfortants et en moments conviviaux, mais aussi de voyager sans quitter ma cuisine en m’aventurant dans des cultures qui me sont inconnues."
        />

        <Hobby
          hobbyName="Jeux vidéos"
          liste_hobby={exemples_jeux}
          description="Les jeux vidéos font partie intégrante de ma vie, et ce sont eux qui m'ont donné envie de me lancer dans l'informatique, en grandissant le fait de vouloir comprendre la logique et les méchanismes derrière les jeux vidéos, comment créer un jeu et ce qui fait que j'aime ou non un jeu vidéo."
          subdescription="Quelques jeux qui m'ont marqué dernièrement et par leur histoire et/ou leurs musiques."
        />
      </div>
    </>
  );
}
