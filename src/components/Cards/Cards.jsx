import Card from "../Card/Card.jsx";
import React from 'react';
//import styles from './Cards.module.css'

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div /*className={style.container}*/>
      {characters ? (
      characters.map((element) => (
        <Card
            key={element.id}
            id={element.id}
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={() => onClose(element.id)}
          />
        ))
      ) : (
        <h3>No hay personajes</h3>
        )}
    </div>
  );
}
