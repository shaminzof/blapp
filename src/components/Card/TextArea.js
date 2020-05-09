import React from "react";
import "./TextArea.css";

const caracter = event => {
  const numero = document.querySelector("#contador");
  let cantidad = event.target.value.length;
  numero.innerHTML = cantidad;
};

const TextArea = () => {
  return (
    <section className="card">
      <span id="contador">Contador de caracteres:</span>
      <textarea onChange={caracter}></textarea>
    </section>
  );
};




export default TextArea;



/*type = color , en el input*/