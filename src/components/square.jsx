import React, { useState } from 'react';

const Square = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const changeColor=()=>{
        setRed(Math.floor(Math.random()*256));
        setGreen(Math.floor(Math.random()*256));
        setBlue(Math.floor(Math.random()*256));
    }
    const stopChangeColor=()=>{
        setRed(0);
        setGreen(0);
        setBlue(0);
    }
    let squareStyle={
        width:"255px",
        height:"255px",
        display:"inline-block",
        margin:"auto",
        backgroundColor:`rgb(${red},${green},${blue})`
    }
    return (
        <div style={squareStyle} onMouseEnter={changeColor} onMouseLeave={stopChangeColor} onDoubleClick={stopChangeColor}>
            
        </div>
    );
}

export default Square;
