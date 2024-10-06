import React, { useEffect, useState, } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Image } from "antd";
import Logo from "../../assets/images/logo/logo.svg";
import "./Header.css";

export default function Header({className}) {
  const[userState, setUserState] = useState(false);
  const [path, setPath] = useState();
  const [headerScroll, setHeaderScroll] = useState(false);
  let urlPath = useLocation();

  useEffect(() => {
    const updateHeaderHeight = () => {
      var headerElement = document.getElementById("header");
      var spaceTop = document.querySelector(".header-space");
      spaceTop.style.paddingTop = headerElement.offsetHeight.toString() + "px";
    };

    updateHeaderHeight();

    function handleResize() {
      updateHeaderHeight();
    }
    window.addEventListener("resize", handleResize);
    setPath(urlPath.pathname);
    
      const handleScroll = event => {
        var heroElement = document.getElementById("header");
        if(window.scrollY > heroElement.offsetHeight){
          setHeaderScroll(true);
        }
        else{
          setHeaderScroll(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
});

  const toggleMenu = () =>{
    const body = document.querySelector("html");
    setUserState(!userState);
    body.classList.toggle("show-menu")
  }
  
  return (
    <>
      <header className={`header ${className ? className : ""} ${path === "/" ? "" : "header-radius"} ${headerScroll === true && path === "/" ? "header-radius" : ""}`} id="header">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <NavLink to="/">
                <Image preview={false} src={Logo} className="cover-img" />
              </NavLink>
            </div>
            <div className="header-navigation ms-auto" id="navigation">
              <ul className="header-navitem d-flex  mb-0" id="myDIV">
                <li>
                  <NavLink
                    onClick={toggleMenu}
                    to="/"
                    className="header-nav  header-nav-links"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleMenu}
                    to="/about-us"
                    className="header-nav header-nav-links"
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleMenu}
                    to="/Faqs"
                    className="header-nav header-nav-links"
                  >
                    Help
                  </NavLink>
                </li>
                <li>
                    <a href="#" className="header-nav header-nav-links"> Contact us</a>
                </li>
              </ul>
            </div>
            <div
              className="hamburger toggle-btn"
              id="hamburger"
              onClick={toggleMenu}
            >
              <span className="line"></span>
            </div>
          </div>
        </div>
      </header>
      <div className="header-space"></div>
    </>
  );
}
