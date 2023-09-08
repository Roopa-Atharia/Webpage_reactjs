import React from "react";
import { NavLink } from 'react-router-dom';
import home from '../Images/home.png';

const Same=(props)=>{
    return(
        <>
<div className="mainSection">
    <div className="contentBox">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className="btnBox">
            <div className="btn"> </div>
            <NavLink to="/about" className="readMore">{props.btn}</NavLink>
        </div>
    </div>
    <div class="imgContainer">
        <img src={props.imgsrc} alt="home"/>
    </div>
</div>
        </>
    )
}
export default Same;