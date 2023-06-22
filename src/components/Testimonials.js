import React from "react";
import ProfilPic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className='"work-secrion-wrapper'>
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">what are they saying</h1>
        <p className="primary-text">
          fmdslkj fdsfhdsnfsfnsu nfdsnfiu nsdfsfjd foj fjdso jfdjsf ak fdokg
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilPic} alt="" />
        <p>fdsbh fdsjfiodj fdsji ifdsjfns fjdsi fjdsk;lf sdf sdjpfpsf</p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonials;
