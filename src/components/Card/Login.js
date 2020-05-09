import React, { useState } from "react";
import "./Login.css";

const Login = () => { /*la variable*/
    const [user, setUser ] = useState('') /* es una funcion que le asigna una variable*/
    const [password, setPassword] = useState('')
    const [button, setButton]= useState(false) /*la funcion*/ 
    const correctPassword = "hola"
    const correctUser = "yamila"
    const handleUser = event => {
        setUser (event.target.value)
    }
    const handlePassword = event => {
        setPassword (event.target.value)
    }
    const handleButton = event => {   /*genera el evento*/ 
       /* if (user===correctUser && password===correctPassword)*/
    }

  return (
    <div className="card">
      <form>
        <div>
          <label>NAME</label>
          <br></br>
          <input type="text" id="name" placeholder="name" onChange={handleUser}/>
        </div>
        <div>
          <label>PASSWORD</label>
          <br></br>
          <input type="password" id="password" placeholder="password" onChange={handlePassword}/>
        </div>
        <button onClick={handleButton} className="boton-form">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
