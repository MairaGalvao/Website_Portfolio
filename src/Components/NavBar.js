import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "@material-ui/core";
import "../css/navBar.css";

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    history.push("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  let history = useHistory();
  return (
    <>
      <Box id="navBar" >
        <Button
          id="btnBackToTop"
          style={{
            color: "#3c5e68",
          }}
        >
          <FaArrowCircleUp
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
          />
        </Button>

        
        <Box id="navBox" className="w3-bar w3-white w3-wide w3-padding w3-card" st>
          <Box id='navMenu'>
            <Box className="nameNavBox" >
            <div class="logo">
    Maíra Galvão
  </div>
            </Box>
            <Box
              className="w2-bar w3-white w3-wide w3-padding w3-card"
              id="itemsNav"
            >
              <Link
         className="itemsBtn"
                activeclassname="active"
                to="home"
                spy={true}
                smooth={true}
                onClick={() => {
                  history.push("/");
                }}
              >
                Home
              </Link>

              <Link
                       className="itemsBtn"
                to="boxContainer"
                spy={true}
                smooth={true}
                onClick={() => {
                  history.push("/about");
                }}
              >
                About
              </Link>

              <Link
                     className="itemsBtn"
                to="wrapperPortfolio"
                spy={true}
                smooth={true}
                onClick={() => {
                  history.push("/portfolio");
                }}
              >
                Portfolio
              </Link>

              <Link
                     className="itemsBtn"
                to="wrapperArticles"
                spy={true}
                smooth={true}
                onClick={() => {
                  history.push("/articles");
                }}
              >
                Articles
              </Link>

              <Link
                 className="itemsBtn"
                to="contactMain"
                spy={true}
                smooth={true}
                onClick={() => {
                  history.push("/contact");
                }}
              >
                Contact
              </Link>
           
           
            </Box>
           
        
          </Box>
      
        </Box>

      </Box>
      <div className="burger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
