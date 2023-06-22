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
          <h1 className="primary-heading">Your favourite cafe</h1>
          <p className="primary-text">
            Healthy switcher fjdk;sjfks djflsfkldsnfhsidl fhsdlifnsld
          </p>
          <button className="secondary-button">
            Order Now
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
            <img src={BannerImage} alt=""/>

        </div>
      </div>
    </div>
  );
};

export default Home;
