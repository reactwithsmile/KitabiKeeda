import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Scifidata } from "../../data/scifidata";

const Scifi = () => {
    return(
      <>
    
    <div className="card">
        <div className="card-data" >
          {Scifidata.map((item,index)=> {
              return (
                <div className="accordion_item">
                    <img src={item.image} className="card-img" alt="..." />
                    <h3 className="card-header">{item.movie}</h3>
                    <p className="card-detail">{item.detail}</p>
                  <div className="Sci-container w-100">
                    <select className="m-2 h-80 w-80 rounded"> 
                      <option value="no">1</option>
                      <option value="no">2</option>
                      <option value="no">3</option>
                      <option value="no">4</option>
                    </select>
                    <select className="m-2 h-80 w-80 rounded"> 
                      <option value="scopy">SOFT-COPY</option>
                      <option value="hcopy">HARD-COPY</option>
                    </select>
                  </div>
                </div>
              )})}
        </div>
        </div>
    
    </>
)
}
export default Scifi;