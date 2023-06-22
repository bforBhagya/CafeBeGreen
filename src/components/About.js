import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">loremd dfjfihsdf fhdsf dfdjsklf</h1>
      </div>
      <p className="primary-text">
        fhdslcds gfdguhfg gfhogfdhohgd jgdfughdfug dgjdhfgd hghio gfhdlkgd g
        dgodgdhgndm gdio
      </p>
      <p className="primary-text">
        fhdslcds gfdguhfg gfhogfdhohgd jgdfughdfug dgjdhfgd hghio gfhdlkgd g
        dgodgdhgndm gdio
      </p>
      <div className="about-button-container">
        <button className="secondary-button">Learn More</button>
        <button className="watch-video-button">{""}
        <BsFillPlayCircleFill/>
        watch</button>
      </div>
    </div>
  );
};

export default About;
