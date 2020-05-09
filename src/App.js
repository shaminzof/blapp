import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import catimg1 from "./components/Card/cat1-img.jpg";
import catimg2 from "./components/Card/cat2-img.jpg";
import TextArea from "./components/Card/TextArea";
import Inputext from "./components/Card/Inputext";
import Boton from "./components/Card/Boton";
import Login from "./components/Card/Login";

function App() {
  const imagenes = [catimg1, catimg2];
  return (
    <div>
      {imagenes.map(img => {   /*para repetir la imagen */
        return <Card title="REACT!" headerimg={img}></Card>;
      })}
      <TextArea></TextArea>
      <Inputext></Inputext>
      <Boton></Boton>
      <Login></Login>
    </div>
  );
}

export default App;
