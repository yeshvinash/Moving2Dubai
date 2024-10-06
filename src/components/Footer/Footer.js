import React, { useEffect, useRef } from "react";
import { Col, Row } from "antd";
import "./Footer.css";
import SVGIcons from "../Data/SVGIcons";

export default function Footer() {
  const fHeaderPadding = useRef(null);

  const footerContainerResize = () => {
    let tempExtraPadding, extraPadding, footerElement, spaceLeft;
    tempExtraPadding = window.getComputedStyle(fHeaderPadding.current).getPropertyValue("padding");
    extraPadding = tempExtraPadding.replace("px", "");
    footerElement = document.getElementById("container");
    spaceLeft = document.querySelector(".footerHeadInner");
    spaceLeft.style.paddingLeft = footerElement.offsetLeft - extraPadding * 2 + "px";
  };

  useEffect(() => {
    footerContainerResize();
    window.addEventListener("resize", footerContainerResize);
  }, []);

  return (
    <>
      <footer>
        <div className="footer-header" ref={fHeaderPadding}>
          <div className="footerHeadInner">
            <div className="footer-content-title">
              <h2 className="text-white secondary-font fw-700">Watch Your Dubai Dreams Take Flight Start Your Business in the UAE Today!</h2>
            </div>
            <div className="contact-wrap d-align">
              <div className="contact-number-wrap d-align">
                <div className="social-icon">
                  {SVGIcons.Whatsapp}
                </div>
                <a href="tel:+971 56 565 5656" className="h5 text-green fw-600">
                  +971 56 565 5656
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container" id="container">
            <div className="">
              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12} xl={8}>
                  <div className="footer-info footer-links">
                    <h6 className="fw-500 text-white">Location</h6>
                    <span>
                      <div className="social-icon-img">{SVGIcons.Location}</div>
                      <p className="fw-400 footer-content text-lightgray">F02, Claverton Street, Up Town Motor City, Dubai, UAE. P.O. Box 237739</p>
                    </span>
                  </div>
                </Col>
                <Col xs={24} lg={12} xl={8}>
                  <div className="footer-links footer-border footer-left-spacing">
                    <h6 className="fw-500 text-white">Contact Us</h6>
                    <a href="mailto:Moving2Dubai@gmail.com">
                      <div className="social-icon-img">{SVGIcons.SMS}</div>
                      <span className="footer-content">Moving2Dubai@gmail.com</span>
                    </a>
                    <a href="tel:+971 56 565 5656">
                      <div className="social-icon-img">{SVGIcons.Call}</div>
                      <span className="footer-content">+971 56 565 5656</span>
                    </a>
                  </div>
                </Col>

                <Col xs={24} lg={12} xl={8}>
                  <div className="footer-links footer-left-spacing">
                    <h6 className="fw-500 text-white">Get in Touch</h6>
                    <div className="contact-email-wrap">
                      <div className="inputWithIcon">
                        <input type="email" placeholder="Enter Email" />
                        <div className="social-icon-img">{SVGIcons.SMS}</div>
                        <button type="button" className="arrow-btn btn">
                          <div className="arrow-icon d-align">{SVGIcons.ArrowLeft}</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="footer-copyright">
              <div className="container">
                <p className="small footer-text">© Copyrights 2022 Moving2Dubai, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
