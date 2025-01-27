import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/home.css";
import { useHistory } from "react-router-dom";
import { Container, Typography, Paper } from "@mui/material";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "90vh",
    paddingBottom: "10px",
  backgroundColor: "none",
  position:'absolute'
};

const paperStyle = {
  padding: "20px",
  textAlign: "center",
  backgroundColor: "transparent",
};

const textStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#333",
};

const nameStyle = {
  fontSize: "1.5rem",
  color: "#333",
};

export function Home() {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);

  let history = useHistory();

  return (
    <>
      <div className="phraseMain" id="home" >
        <Container style={containerStyle}>
          <Paper elevation={5} style={paperStyle}>
            <Typography style={textStyle}>Web & Product Developer</Typography>
            <Typography style={nameStyle}>- Maíra Galvão -</Typography>
          </Paper>
        </Container>

      </div>
    </>
  );
}
