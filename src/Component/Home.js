import React from "react";
import { NavLink } from 'react-router-dom';
import home from '../Images/home.png';
import '../Css/HomeAbout.css';
import Same from './Same';

const Home=()=>{
    return(
        <>
<Same
    title="A platform built for a new way of working"
    text="Humans are hard-wired to dream, to create, to innovate. Each of us seeks to do work that gives us purpose — to write a great novel, to make a discovery, to build strong communities, to care for the sick. But today, we spend too much time consumed by the drudgery of work on tasks that zap our time, creativity and energy. To reconnect to the soul of our work, we don’t just need a better way of doing the same things. We need a whole new way to work."
    imgsrc={home}
    btn="Read More"
/>
        </>
    )
}
export default Home;