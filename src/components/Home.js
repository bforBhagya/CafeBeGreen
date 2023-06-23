import React from "react";
import BannerBackground from "../Assets/home-banner-background.jpg";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        {/* <div className="home-banner-image-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <div className="home-text-section-container">
            <h1 className="primary-heading">
              "Elevate your wellness routine with the magic of coffee"
            </h1>
          </div>

          <p className="primary-text">
            Coffee, when consumed in moderation, can be part of a healthy
            lifestyle. It contains natural compounds that offer potential health
            benefits. The caffeine found in coffee can provide a temporary boost
            in energy and mental alertness.
          </p>
          <button className="secondary-button">
            Order Now
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
            <img className="home-image" src={BannerImage} alt=""/>

        </div>
      </div>
    </div>
  );
};

export default Home;
