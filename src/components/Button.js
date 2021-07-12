import React from 'react';
import './Button.css';

const STYLES = [
    "button--number",
    "button--function",
    "button--equals"
]

const SIZE = [
    "button--narrow",
    "button--wide1",
    "button--wide2"
]

const Button = ({
    children,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZE.includes(buttonSize) 
    ? buttonSize
    : SIZE[0];

    return ( 
        <button 
        onClick={onClick} 
        className={`${checkButtonStyle} ${checkButtonSize}`}
        >
            {children}
        </button>
     );
}
 
export default Button;