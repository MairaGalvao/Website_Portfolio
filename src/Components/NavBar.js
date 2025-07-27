import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import '../css/navBar.css';

const navContainerStyle = {
  position: 'fixed',
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255,0.95)',
  padding: '20px',
  fontFamily: "Mona Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: 600,
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  zIndex: 10000, // make sure it’s on top
  transition: 'background-color 0.3s ease',
};

const logoStyle = {
  fontSize: '1.5rem',
  color: '#333',
  textDecoration: 'none',
  cursor: 'pointer',
  marginRight: '20px',
};

const itemsBtnStyle = {
  margin: '0 10px',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
  textDecoration: 'none',
  cursor: 'pointer',
};

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const handleClick = (path) => {
    history.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box className="navContainer" id="navBar" style={navContainerStyle}>
      <Box className="logo" onClick={() => handleClick('/')} style={logoStyle}>
        Maíra Galvão
      </Box>
      <Box className="navMenu" style={{ display: 'flex' }}>
        <Box
          className="itemsNav"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Link
            className="itemsBtn"
            to="home"
            spy={true}
            smooth={true}
            style={itemsBtnStyle}
            onClick={() => handleClick('/')}
          >
            Home
          </Link>
          <Link
            className="itemsBtn"
            to="portfolio"
            spy={true}
            smooth={true}
            style={itemsBtnStyle}
            onClick={() => handleClick('/portfolio')}
          >
            Portfolio
          </Link>
          <Link
            className="itemsBtn"
            to="articles"
            spy={true}
            smooth={true}
            style={itemsBtnStyle}
            onClick={() => handleClick('/extras')}
          >
            Extras
          </Link>
          <Link
            className="itemsBtn"
            to="contact"
            spy={true}
            smooth={true}
            style={itemsBtnStyle}
            onClick={() => handleClick('/contact')}
          >
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
