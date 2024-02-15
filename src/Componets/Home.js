import React from "react";
import "./firstBackground.css";
import Indexpic from "../Public/pic1idex.png"
import { CardIndex } from "./CardIndex";
import { BottomHome } from "./BottomHome";

export const Home = () => {
  return (
    <>
      <div className="firstBackground">
        <div className="Nav">
          <h1>Pobitra</h1>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Page</li>
          </ul>
          <button className="navbutton">Get Started</button>
        </div>
        {/* index  ----------- */}
        <div className="HomeIndex">
          <div>
            <p>wellcome to pobitra</p>
            <div className="indexword">We solve business problems with technology.</div>
            <h3>Our performance is your success. Our passion is innovation. Our expertise is unmatched . We get you more.</h3>
            <button className="button1">Get Started</button>
            <button className="button2">View Case Study</button>

          </div>
          <div className="indexpic">
            <img src={Indexpic} alt="Img" height={474} />

          </div>
        </div>
      </div>
      <CardIndex/>
      
      <BottomHome/>
    </>
  );
};
