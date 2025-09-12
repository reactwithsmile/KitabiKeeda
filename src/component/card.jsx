import React from "react";
import "../css/card.css";
import {Carddata} from "../data/carddata";

const Card = () => {
    return(
        <>
        <div className="card">
            <div className="card-header">
                <span className="stroke-text" style={{color:"grey"}} >explore our genres to sharp your mind </span>
            </div>
            <div className="cards">
                <div className="card-data">
                    {Carddata.map((item, index) => {
                        return (
                        <div className="accordion_item" key={item.key}>
                            <h4 className="card-heading">{item.heading}</h4>
                                <a href={item.link} target="_img">
                                <img src={item.image} alt="movie_img" className="card-img"/>
                                </a>
                                <p className="card-detail">{item.detail}</p>
                        </div>
                    )})}
                </div>
            </div>
        </div>
        </>
    )}
export default Card;