import React from "react";
import { NavLink } from 'react-router-dom';

const Cards1=(props)=>{
    return(
        <>
<div className="card">
        <h2>{props.title}</h2>
        <img src={props.imgsrc} alt="services" className="serviceImg"/>
        <p>{props.desc}</p>
        <div className="btnBox">
            <div className="btn"> </div>
            <NavLink to="/about" className="readMore">{props.btnService}</NavLink>
        </div>
    </div>
        </>
    )
}
export default Cards1;