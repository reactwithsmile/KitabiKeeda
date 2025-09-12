import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Advdata } from "../../data/advdata";

const Adventure = () =>{
    return(
        <>
            <div className="card">
        <div className="card-data" >
          {Advdata.map((item,index)=> {
              return (
                <div className="accordion_item col-4">
                    <img src={item.image} className="card-img" alt="..." />
                    <h3 className="card-header">{item.movie}</h3>
                    <p className="card-detail">{item.detail}</p>
                  <div className="Sci-container w-100">
                    <select className="m-2 h-80 w-80 rounded "> 
                      <option value="no">1</option>
                      <option value="no">2</option>
                      <option value="no">3</option>
                      <option value="no">4</option>
                    </select>
                    <select className="m-10 h-80 rounded"> 
                      <option value="scopy">SOFT-COPY</option>
                      <option value="hcopy">HARD-COPY</option>
                    </select>
                  </div>
                  <div className="d-inline h-100 fs-5">
                        TOTAL PRICE : 
                  </div>
                  <div className="h-100 fs-2">
                    <button className="btn btn-outline-info" type="submit">BUY NOW</button> 
                  </div>
                </div>
              )})}
        </div>
        </div>
    
        </>
    )
}

export default Adventure;