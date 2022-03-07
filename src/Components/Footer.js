import React from "react";
import { Box } from "@material-ui/core";

export function Footer() {
  return (
    <>
    <Box >
      <section id="lab_social_icon_footer" >
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <Box className="container" style={{paddingLeft:'100px'}}>
          <Box className="text-center center-block">
            <a href="https://www.linkedin.com/in/maira-galvao">
              <i id="social-fb" className="fab fa-linkedin fa-2x social"></i>
            </a>
            <a href="https://github.com/MairaGalvao">
              <i id="social-tw" className="fa fa-github fa-2x social"></i>
            </a>
            <a href="mailto:mairagalvao01@gmail.com">
              <i
                id="social-gp"
                className="fa fa-google-plus-square fa-2x social"
              ></i>
            </a>
          </Box>
        </Box>
        <p style={{ color: "black", paddingRight: "150px", fontFamily: "Poppins sans-serif", fontSize:'22px'}}>
          ©2021 Maíra Galvão
        </p>
      </section>
      </Box>
    </>
  );
}
