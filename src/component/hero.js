import React from "react";
import "../css/hero.css";
import tab from "../img/tab (5).png";
import {motion} from "framer-motion";
import Login from "./login";
import Navbar from "./navbar"

const Hero = () =>{
    const transition = {type: 'spring', duration: 5};
    
    return(
        <div>
             <div> <Navbar /> </div>
        <div className="hero">
          
            <div className="h-left">
                <div className="best">
                    <motion.div
                    initial={{left:'220px'}}
                    whileInView={{left:'12px'}}
                    transition={{...transition, type:'tween'}}
                    ></motion.div> 
                    <span>discover treasure between the pages.........</span>
                </div>
                {/* Hero-text */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text" style={{color:"grey"}}> Reading a book </span> 
                        <span> is like re-writing it </span>  
                    </div>
                    <div>
                        <span>for yourself.</span>
                    </div>
                    <div >
                        <span>Here we are providing awesome facility to reader from publisher.</span>
                    </div>
                </div>
                    <div className="figures">
                        <div>
                            <span>+ 80</span>
                            <span>expert publisher</span>
                        </div>
                        <div>
                            <span>+ 90</span>
                            <span>Members joined</span>
                        </div>
                        <div>
                            <span>+10</span>
                            <span>Genres</span>
                        </div>
                    </div>
                    <div className="start-btn">
                        <button className="btn btn-style" type="submit" style={{backgroundColor:"orange"}} >Get Started</button>
                        <button className="btn btn-style btn-style-border" type="submit" onClick={Login}>Know more</button>
                    </div>
            </div>
            <div className="h-right">
                <div className="tab">
                <div className="blur hero-blur"></div>
                    <img src={tab} alt="no"/>
                </div>
            </div>
    </div>
    </div>
)}
export default Hero;