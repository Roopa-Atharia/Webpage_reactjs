import React from "react";
import logo from '../Images/Vanamo_Logo.png';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import '../Css/ListStyle.css';

const Lists=()=>{
    return(
        <>
<header>
    <div className="container container-flex">
        <div className="logoContainer">
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <nav>
            <div className="list">
                <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
                <NavLink to="/services" className="listItem" activeClassName="activeItem">Services</NavLink>
                <NavLink to="/contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
                <NavLink to="/policy" className="listItem" activeClassName="activeItem">Policy</NavLink>
            </div>
        </nav>
        <div className="icons">
            <SearchIcon className="icons"/>
            <PersonIcon className="icons"/>
            <CallIcon className="icons"/>
        </div>
    </div>
</header>
        </>
    )
}
export default Lists;