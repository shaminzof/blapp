import React, { useState } from "react";
import "./Boton.css";

const Boton = () => { /*la variable*/
  const [counter, setCounter] = useState(140); /*la funcion*/ 
  const handleClick = event => {   /*genera el evento*/ 
    setCounter(counter + 1);
  };

  return (
    <div className="card">
      <p>{counter}</p>
      <br></br>
      <button onClick={handleClick}>cambiar</button>
    </div>
  );
};

export default Boton;
