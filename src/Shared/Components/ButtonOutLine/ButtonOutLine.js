
import React from 'react';
import  './ButtonOutLine.scss'
const ButtonOutLine = ({text, type, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className={type}>{text}</button>
        </div>
    );
}

export default ButtonOutLine;
