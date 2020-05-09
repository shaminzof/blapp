import React, { useState } from "react";
import "./Inputext.css";

const TextCounter = () => {
    const [counter, setCounter] = useState(140);
    const max = 140;
    const handleChange = event => {
        const chars = event.target.value;
        setCounter(max - chars);
    };

    return (
        <div>
            <input onChange={handleChange}/>
            <input/>
            <div id="counter"></div>
        </div>
    )
};

export default TextCounter;