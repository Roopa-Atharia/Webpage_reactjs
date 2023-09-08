import React from "react";
import { NavLink } from 'react-router-dom';
import img2 from '../Images/img2.avif';
import Same from './Same';

const About=()=>{
    return(
        <>
<Same
    title="Master the computer tools with us"
    text="Computer programs are collections of instructions that tell a computer how to interact with the user, interact with the computer hardware and process data. The first programmable computers required the programmers to write explicit instructions to directly manipulate the hardware of the computer."
    imgsrc={img2}
    btn="Know service"
/>
        </>
    )
}
export default About;