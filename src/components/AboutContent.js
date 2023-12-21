import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import production from "../assets/production.jpg";
import eliashevsky from "../assets/eliashevsky.jpg";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>
                Im a react font-end developer. I create responsive secure website for my clients.
            </p>
           
                <Link to="/contact">
                    <button id="active" className="btn">Contact</button>
                </Link>
            
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={production} className="img" alt="true"/>     
                    </div>
                    <div className="img-stack bottom">
                    <img src={eliashevsky} className="img" alt="true"/>     
                    
                </div>
            </div>
        </div>
    </div>
  )
};

export default AboutContent;