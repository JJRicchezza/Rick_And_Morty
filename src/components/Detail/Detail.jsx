//import style from "./Detail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail(props) {
  const [infoDetail, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  function backToHome() {
    navigate("/home");
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setInfo(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return () => setInfo({});
  }, [id]);

  return (
    <div>
      <div>
        <button onClick={backToHome}>Volver</button>
      </div>
      {infoDetail.id ? (
        <div>
          <h1>{infoDetail.name}</h1>
          <h1>{infoDetail.status}</h1>
          <h1>{infoDetail.species}</h1>
          <h1>{infoDetail.gender}</h1>
          <h1>{infoDetail.origin?.name}</h1>
          <div>
            <img src={infoDetail.image} alt={infoDetail.name} />
          </div>
        </div>
      ) : (
        <h1>No existe personaje</h1>
      )}
    </div>
  );
}
