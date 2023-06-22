import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { Title } from "@mui/icons-material";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "fdsjjfds fmndslkj fds fdjsio fjdfdjk",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "fdsjjfds fmndslkj fds fdjsio fjdfdjk",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "fdsjjfds fmndslkj fds fdjsio fjdfdjk",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-subheading">How It Works</h1>
        <p className="primary-text">
          jhfds fdslhfsd nfsio hfdskf fdspo jfdsk jf dspif sdkfsfkls
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
