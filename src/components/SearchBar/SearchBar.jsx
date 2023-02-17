import { useState } from "react";

export default function SearchBar(props) {
  const [text, setText] = useState(""); // Ejercicio 8 HW 08 React-Estado-LifeCycle | Integración

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input
        type="search"
        value={text}
        onChange={
          handleChange
        } /* se pone 'text' en esta busqueda que es el personaje*/
      />
      <button onClick={() => props.onSearch(text)}>Agregar</button>
    </div>
  );
}
