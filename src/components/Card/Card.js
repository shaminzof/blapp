import React from "react";
import "./Card.css";

const Card = props => {
  /*props son nuestro parametros, es algo que ya existe. Le puedo agregar info*/ /*como hacer un componente*/
  return (
    <section className="card">
      <header
        className="card-header" /*el primero es de js y el segundo de objeto*/
        style={{
          backgroundImage: `url(${props.headerimg})`
        }}
      >
        <h1 className="text-h1">{props.title}</h1>
      </header>
      <article className="card-article">
        <p className="text-p">hellou</p>
        <a href=""></a>
        <i className="res"></i>
      </article>
    </section>
  );
};

export default Card;
