import React, { useState } from "react";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import "../css/navBar.css";

const navContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  padding: "20px",
  fontFamily: "Mona Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: 600,
};

const logoStyle = {
  fontSize: "1.5rem",
  color: "#333",
  textDecoration: "none",
  marginRight: "20px",
};

const itemsBtnStyle = {
  margin: "0 10px",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#333",
  textDecoration: "none",
};

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
    <Box className="navContainer" id="navBar" style={navContainerStyle}>
      <Box className="logo">
        <Link
          to="home"
          spy={true}
          smooth={true}
          style={logoStyle}
          onClick={() => {
            history.push("/");
          }}
        >
          Maíra Galvão
        </Link>
      </Box>
      <Box className="navMenu">
        <Box className="itemsNav" style={itemsBtnStyle}>
          <Link
            className="itemsBtn"
            to="home"
            spy={true}
            smooth={true}
            style={itemsBtnStyle}
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Link>
          <Link
            className="itemsBtn"
            to="portfolio"
            spy={true}
            smooth={true}
            style={itemsBtnStyle}
            onClick={() => {
              history.push("/portfolio");
            }}
          >
            Portfolio
          </Link>
          <Link
            className="itemsBtn"
            to="articles"
            spy={true}
            smooth={true}
            style={itemsBtnStyle}
            onClick={() => {
              history.push("/extras");
            }}
          >
            Extras
          </Link>
          <Link
            className="itemsBtn"
            to="contact"
            spy={true}
            smooth={true}
            style={itemsBtnStyle}
            onClick={() => {
              history.push("/contact");
            }}
          >
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
