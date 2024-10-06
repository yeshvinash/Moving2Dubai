import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import SVGIcons from "../../components/Data/SVGIcons";
import heroImg from "../../assets/images/hero-circle-img.png";
import heroBuildingImg from "../../assets/images/building.png";
import "./Home.css";
import Opening from "./../../assets/images/icons/opening.png";
import Closing from "./../../assets/images/icons/closing.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import Header from "../../components/Header/Header";
import { FacilityData, HelpData, ServiceData, SwiperContent, SwiperNavigate } from "../../components/Data/Constants";

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const containerResize = () => {
    let HeroElement, spaceLeft;
    HeroElement = document.getElementById("container");
    spaceLeft = document.querySelector(".heroInner");
    spaceLeft.style.paddingLeft = HeroElement.offsetLeft - 30 + "px";
  };

  useEffect(() => {
    containerResize();
    window.addEventListener("resize", containerResize);
  }, []);

  return (
    <>
      <div className="main-hero-header-wrap">
        <Header className={""} />
        <div className="hero-wrapper">
          <div className="hero-content-wrap heroInner">
            <div className="hero-title">
              <h1 className="text-white secondary-font fw-600 h1 ">The Fastest Road to Company Setup in Dubai </h1>
            </div>
            <div className="hero-info-wrap">
              <div className="hero-btn">
                <button className="btn get-started-btn">GET STARTED</button>
              </div>
              <div className="hero-img-wrap">
                <div className="hero-img-content-wrap">
                  <div className="hero-circle-img">
                    <Image preview={false} src={heroImg} className="cover-img" />
                  </div>
                  <div className="hero-text-wrap">
                    <p className="text-white h5">Grab the opportunity to get up to 2 years freelance permit and visa in Dubai. Complete your application in just 10 minutes and start your freelancing career with Moving2Dubai (M2D).</p>
                  </div>
                  <div className="hero-building-img">
                    <Image preview={false} src={heroBuildingImg} className="cover-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="container">
        <div className="about-containers-wrap space-lg-top space-bottom why-dubai">
          <div className="our-right our-dubai-right">
            <h5 className="fw-400 text-darkgray">Dubai is an international hub of culture and business possibilities. Entrepreneurs and freelancers from all over the world flock here to enjoy the region’s thriving economy, high profit potential, stable political climate, investor-friendly policies, and so much more.</h5>
          </div>
          <div className="our-left our-dubai-left why-dubai-left">
            <h2 className="secondary-font text-blue subtitle text-wrap">
              <span className="text-black">Why</span> Dubai ?
            </h2>
          </div>
        </div>
        <div className="about-containers-wrap why-m2d">
          <div className="our-left our-m2d-left">
            <h2 className="secondary-font text-blue subtitle text-wrap">
              <span className="text-black">Why</span> M2D ?
            </h2>
          </div>
          <div className="our-right our-m2d-right">
            <h5 className="fw-400 text-darkgray">Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.</h5>
          </div>
        </div>
      </div>
      <div className="facilities-wrap">
        <div className="container">
          <Row
            justify={"center"}
            gutter={[
              { xs: 24, sm: 24, xxl: 48 },
              { xs: 24, sm: 24, xxl: 48 },
            ]}
          >
            {FacilityData.map((facility) => {
              return (
                <Col key={facility.id} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                  <div className="facility-content-wrap">
                    <div className="facility-icon-wrap">{facility.image}</div>
                    <p className="facility-title fw-500 primary-font">{facility.title}</p>
                    <p className="small text-lightgray primary-font text-justify">{facility.detail}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className="container">
        <div className="help-wrap space-lg-top space-lg-bottom">
          <h2 className="text-black secondary-font page-title text-center">
            How can we <span className="text-blue">help</span> you today ?
          </h2>
          <Row
            gutter={[
              { xs: 20, sm: 20, xxl: 24 },
              { xs: 20, sm: 20, xxl: 24 },
            ]}
          >
            {HelpData.map((data) => {
              return (
                <Col key={data.id} md={{ span: 12 }} lg={{ span: 6 }} xxl={{ span: 6 }}>
                  <div className="help-content-wrap">
                    <Image preview={false} src={data.image} />
                    <div className="help-des-wrap">
                      <h6 className="primary-font fw-500 text-black help-title text-ellipsis two-line-ellipsis">{data.title}</h6>
                      <div className="help-btn-content-wrap">
                        {data.description}
                        <button className="apply-btn primary-font">{data.btnText}</button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="customer-feedback-wrap">
          <h2 className="text-black secondary-font page-title text-center">
            Our <span className="text-blue">customers</span> loves us
          </h2>
          <div className="swiper-wrap">
            <div className="swiper-content-wrap">
              <div className="open-inverted">
                <Image preview={false} src={Opening} />
              </div>
              <div className="closed-inverted">
                <Image preview={false} src={Closing} />
              </div>
              <div className="swiper-content">
                <Swiper spaceBetween={10} navigation={{ nextEl: ".next-slide", prevEl: ".prev-slide" }} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[Navigation, Thumbs]} className="mySwiper2">
                  {SwiperContent.map((content) => {
                    return (
                      <SwiperSlide key={content.id}>
                        <h5 className="fw-400">{content.review}</h5>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className="swiper-navigate-wrap">
              <div className="swiper-navigate">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  watchSlidesProgress={true}
                  modules={[Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {SwiperNavigate.map((navigate) => {
                    return (
                      <SwiperSlide key={navigate.id}>
                        <div className="profile-wrap">
                          <div className="profile-photo">
                            <Image preview={false} src={navigate.image} />
                          </div>
                          <div>
                            <h6 className="profile-name fw-500">{navigate.name}</h6>
                            <p className="small profile-rating">{navigate.rating}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="prev-slide">{SVGIcons.Prev}</div>
              <div className="next-slide">{SVGIcons.Next}</div>
            </div>
          </div>
        </div>
        <div className="space-lg-top space-lg-bottom">
          <h2 className="text-black secondary-font page-title text-center">
            Our <span className="text-blue">Services</span>
          </h2>
          <div className="service-container">
            <Row
              justify={"space-between"}
              gutter={[
                { xs: 16, sm: 20, md: 25, lg: 30, xl: 0, xxl: 0 },
                { xs: 16, sm: 20, md: 25, lg: 30, xl: 0, xxl: 0 },
              ]}
            >
              {ServiceData.map((service) => {
                return (
                  <Col key={service.id} xs={{ span: 24 }} md={{ span: service.mdSize }} xl={{ span: service.xlSize }} xxl={{ span: service.xxlSize }} className={service.id === "2" ? "service-center" : ""}>
                    {service.columnData.map((servicelink) => {
                      return (
                        <Link key={servicelink.id} className="service-link">
                          <span className="service-arrow">{SVGIcons.RightArrow}</span>
                          {servicelink.link}
                        </Link>
                      );
                    })}
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
