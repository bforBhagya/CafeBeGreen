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
        <p className="primary-subheading-about">About</p>
      </div>
      <p className="primary-text">
      Welcome to Java Junction, your ultimate destination for exceptional coffee and memorable experiences. At Java Junction, we believe that a great cup of coffee is more than just a beverage; it's a catalyst for connection, inspiration, and rejuvenation. Our dedicated team of passionate baristas meticulously craft each cup, sourcing the finest beans from around the world and applying their expertise to create a perfect balance of flavor and aroma. 
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
