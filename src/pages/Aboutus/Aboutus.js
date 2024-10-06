import React from "react";
import "./Aboutus.css";
import VisionImg from "./../../assets/images/cover/vision.jpg";
import { Image } from "antd";
import Header from "../../components/Header/Header";

export default function Aboutus() {

  return (
    <>
      <Header className={""} />

      <div className="container">
        <div className="page-title space-top">
          <h2 className="secondary-font text-blue about-us-title">
            <span className="text-black">About</span> Us
          </h2>
          <p className="h5 line-height1-5 text-darkgray">Helping you to setup your business in DUBAI</p>
        </div>
        <div className="about-containers-wrap our-vision-wrap">
          <h2 className="secondary-font text-blue about-subtitle mobile-value">
            <span className="text-black">Our</span> Vision
          </h2>
          <div className="our-vision-left">
            <Image preview={false} src={VisionImg} />
          </div>
          <div className="our-vision-right">
            <h2 className="secondary-font text-blue about-subtitle desktop-value">
              <span className="text-black">Our</span> Vision
            </h2>
            <h5 className="fw-400 text-darkgray">Dubai is an international hub of culture and business possibilities. Entrepreneurs and freelancers from all over the world flock here to enjoy the region’s thriving economy, high profit potential, stable political climate, investor-friendly policies, and so much more.</h5>
          </div>
        </div>
        <div className="about-containers-wrap space-lg-top space-lg-bottom our-m2d">
          <div className="our-left our-m2d-left">
            <h2 className="secondary-font text-blue subtitle">
              <span className="text-black">Our</span> M2D
            </h2>
          </div>
          <div className="our-right our-m2d-right">
            <h5 className="fw-400 text-darkgray">Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.</h5>
          </div>
        </div>
        <div className="about-containers-wrap space-lg-bottom our-dubai">
          <div className="our-right our-dubai-right">
            <h5 className="fw-400 text-darkgray">Dubai is an international hub of culture and business possibilities. Entrepreneurs and freelancers from all over the world flock here to enjoy the region’s thriving economy, high profit potential, stable political climate, investor-friendly policies, and so much more.</h5>
          </div>
          <div className="our-left our-dubai-left">
            <h2 className="secondary-font text-blue subtitle">
              <span className="text-black">Our</span> Dubai
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
