import React from "react";
import "./BottomHome.css";
import logo1 from "../Public/logoipsum-285.svg";
import logo2 from "../Public/logoipsum-289.svg";
import logo3 from "../Public/logoipsum-294.svg";
import logo4 from "../Public/logoipsum-297.svg";
import logo5 from "../Public/logoipsum-311.svg";
import logo6 from "../Public/logoipsum-317.svg";
import logo7 from "../Public/logoipsum-330.svg";
import bottomImg from "../Public/bottom1.png";
import rightImg from "../Public/success_12518378.png";

export const BottomHome = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Join our 30,000 happy customers</h2>
      <br />
      <div className="logo">
        <img
          src={logo1}
          alt=""
          width={130}
          style={{ aspectRatio: "3/2", objectFit: "contain" }}
        />
        <img
          src={logo2}
          alt=""
          width={130}
          style={{ aspectRatio: "3/2", objectFit: "contain" }}
        />
        <img
          src={logo3}
          alt=""
          width={130}
          style={{ aspectRatio: "3/2", objectFit: "contain" }}
        />
        <img
          src={logo4}
          alt=""
          width={130}
          style={{ aspectRatio: "3/2", objectFit: "contain" }}
        />
        <img
          src={logo5}
          alt=""
          width={130}
          style={{ aspectRatio: "3/2", objectFit: "contain" }}
        />
        <img
          src={logo6}
          alt=""
          width={130}
          style={{ aspectRatio: "3/2", objectFit: "contain" }}
        />
        <img
          src={logo7}
          alt=""
          width={130}
          style={{ aspectRatio: "3/2", objectFit: "contain" }}
        />
      </div>
      <br />
      <div className="BottomEl">
        <div className="bottomcard">
          <div className="bottomheading">
            Let us do the work, so you can focus on what matters.
          </div>
          <div className="bottompara">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </div>
          <br />
          <button className="cardbuttom">Learn more</button>
        </div>
        <div className="bottomimg">
          <img src={bottomImg} alt="img" width={800}></img>
        </div>

        <div className="bottomRightCard">
          <div className="bottomRightCard1">
            <img src={rightImg} alt="" height={50} />
            <h3 style={{ color: "black" }}>Remote Home Office</h3>
          </div>
          <div className="bottomRightCard2">
            <img src={rightImg} alt="" height={50} />

            <h3>Virtual Workstation</h3>
          </div>

          <div className="bottomRightCard3">
            <img src={rightImg} alt="" height={50} />

            <h3 style={{ color: "black" }}>Terminal Server</h3>
          </div>
        </div>
      </div>
    </>
  );
};
