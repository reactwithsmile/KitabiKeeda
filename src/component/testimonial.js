import React, { useState } from "react";
import "../css/testimonial.css";
import {testimonial} from "../data/testimonial";
import left from "../img/left.png";
import right from "../img/right.png";
import {motion} from "framer-motion";
import Join from "./join";
import Footer from "./footer";

const Testimonial = () => {

    const transition = { type:'spring', duration:3 };
    const [select , setSelect] = useState(2);
    const tlength = testimonial.length;
    
return(
        <div>
        <div className="testimonial">
             <div className="blur t-blur"></div>
            <div className="t-left">
               
                <span>Testimonials </span>  
                <span className="stroke-text">what they </span>
                <span className="stroke-text">say about us? </span>
                <motion.span
                key={select}
                initial={{opacity: 0,x: -100}}
                animate={{ opacity:1 ,x:10}}
                exit={{opacity:1 ,x:100}}
                transition={transition}
                >{testimonial[select].review}</motion.span>
                <span style={{color:"red"}}>{testimonial[select].tname}</span>
                <span>{testimonial[select].status}</span>
            </div>
             <div className="t-right">
                <div></div>
                <div></div>
                <img src= {testimonial[select].image} alt="no pic"/>
                <div className="arrow">
                    <img onClick={()=>{
                        select===0
                        ? setSelect(tlength -1)
                        : setSelect ((prev)=> prev -1)
                    }} 
                    src={left} alt="no pic" />
                    <img onClick={()=>{
                        select===tlength -1
                        ? setSelect(0)
                        : setSelect ((prev)=> prev +1)
                    }}src={right} alt="no pic"/>
                </div> 
             </div> 
             </div>
             <div> <Join /> </div>
             <div> <Footer /> </div>
        </div>
       
)}
export default Testimonial;