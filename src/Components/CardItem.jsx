import React from "react";
import {NavLink} from "react-router-dom";

const CardItem=(props)=>{
    return(
        <>
            <li className="card-item">
                <NavLink className="card-item-link" to={props.path}>
                    <figure className="card-item-img-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel Image" className="card-item-img"/>
                    </figure>
                    <div className="card-item-info">
                        <h1 className="card-item-text">{props.text}</h1>
                    </div>
                </NavLink>
            </li>
        </>
    )
}

export default CardItem;
