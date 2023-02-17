import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, species, gender, image, onClose, id }) {
  return (
    <div className={style.contenedor}>
      <button onClick={onClose} className={style.closeButton}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={style.cardName}>{name}</h2>
      </Link>

      <h2 className={style.cardSpecies}>{species}</h2>
      <h2 className={style.cardGender}>{gender}</h2>
      <img src={image} className={style.cardImage} alt="" />
    </div>
  );
}
