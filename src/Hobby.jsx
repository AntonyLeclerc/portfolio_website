import React from "react";

export default function Hobby({ hobbyName, liste_hobby, description, subdescription}) {
  
  return (
    <div className="hobby_bloc">
          <h1>{hobbyName}</h1>
          <p>{description}</p>
          {subdescription && <p>{subdescription}</p>}
      <div className="exemples_hobbies">
        {liste_hobby.map((items) => {
          return (
            <div className="exemple_current_hobby">
                  <p><a href={items.wiki_link} target="_blank">{items.item_name}</a></p>
              <img src={items.img_path} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
