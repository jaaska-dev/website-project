import React, {Fragment} from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

//Button styling array
const STYLES = ['btn--primary', 'btn--outline'];

//An array for button sizes
const SIZES = ['btn--medium', 'btn--large'];

const Button = (
    {
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }) => {
    //If the button has a style, it will leave it, otherwise first style in the STYLES array
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    //The same with size as with styles.
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                {children}
            </button>
        </Link>
    )
}

export default Button;