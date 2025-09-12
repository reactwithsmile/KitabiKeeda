import React from "react";
import {Paymentdata} from "../data/paymentdata";
import "../css/payment.css";
import tick from "../img/icons8-double-tick-80.png";

const Payment = () => {
  return (
    <>
        <div className="payment">
        
              <h1 className="stroke-text text-center" style={{color:"navy"}}>
                Ready to start your journey with us.
              </h1>

              {/* Paymentdata side */}
              <div className="payment-card">
              {Paymentdata.map((item , index) => (
                  <div className="payment-cards" key={index}>
                    <img src={item.image} alt="no" /><br/>
                    <span> {item.name}</span> <br/> 
                    <span>$ {item.price}</span><br/>

                    <div className="feature">
                      {item.feature.map((feature , featureIndex) => (
                      <div className="featureIndex" key={featureIndex}>
                        <img src={tick} alt=""/> 
                        <span>{feature}</span>
                      </div>    
              ))}
              <button className="btn" type="submit">Join Now</button>
              </div>
                  </div>
              ))},
              </div>
          </div>
    </>
  );
};

export default Payment;