import React from "react";
import "./Button.css"
import { NavLink } from "react-router-dom";

const STYLES=['btn--primary' , 'btn--outline'];

const SIZES=['btn--medium','btn--large']

const Button=({children,type,onClick,buttonSize,buttonStyle})=>{
    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize=SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return(
        <>
        <NavLink to='/SignUp' className="btn-link">
            <button onClick={onclick} type={type} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                {children}
            </button>
        </NavLink>
        </>
    )
}

export default Button;

//btn-link ->btnmobile
//signup-->