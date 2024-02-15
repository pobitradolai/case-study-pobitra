import React from "react";
import "./CardIndex.css";
import softwarepic from "../Public/software-development_8083244.png";
import cloudpic from "../Public/cloud-computing.png";
import Sequrity from "../Public/password.png";

export const CardIndex = () => {
  return (
    <>
      <div className="card">
        <div className="card1">
          <img src={softwarepic} alt="img1" />
          <div className="cardHead">Software Services</div>
          <br />
          <div className="cardpara">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer{" "}
          </div>
          <button className="cardbutton">Learn more</button>
        </div>
        <div className="card2">
          <img src={cloudpic} alt="img1" />
          <div className="cardHead">Cloud Services</div>
          <br />
          <div className="cardpara">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer{" "}
          </div>
          <button className="cardbutton">Learn more</button>

        </div>
        <div className="card3">
          <img src={Sequrity} alt="img1" />
          <div className="cardHead">Security Services</div>
          <br />
          <div className="cardpara">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer{" "}
          </div>
          <button className="cardbutton">Learn more</button>

        </div>
      </div>
    </>
  );
};
