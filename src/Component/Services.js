import React from "react";
import '../Css/ServiceStyle.css';
import Card from './Card';
import Data from './Data';

const Services=()=>{
    return(
        <>
<h1>Our Services</h1>
<div className="services">
        {Data.map((values)=>{
            return(
                <Card
                    title={values.title}
                    imgsrc={values.imgsrc}
                    desc={values.desc}
                    btnService={values.btnService}
                />
            )
        })},
    
</div>
        </>
    )
}
export default Services;