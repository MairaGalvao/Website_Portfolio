import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/about.css";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
export function About() {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);
  return (
    <>
      <Box id="boxContainer" style={{ display: "flex", paddingTop: "80px" }}>
        <Box
          className="profileBox"
          style={{ paddingLeft: "50px", paddingTop: "50px" }}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <Box className="cardAbout card0">
            <Box className="borderAbout">
              <h2 className="myName">Maíra Galvão</h2>
              <Box className="iconsSkillsAbout">
                <a
                  href="https://www.linkedin.com/in/maira-galvao"
                  style={{ fill: "#fff", color: "#fff" }}
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/MairaGalvao/"
                  style={{ fill: "#fff", color: "#fff" }}
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="header" data-aos="fade-down">
            <h1>Reliable, Determinated and proactive</h1>
            <h1>Powered by motivation!</h1>
          </Box>
          <Box className="row1-container">
            <Box
              className="box box-down cyan"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h2>Hard-worker</h2>
              <p>
                Working hard is a quality that people know about me. I always
                achieve what I set out to do.{" "}
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                alt="Hard-worker"
              />
            </Box>

            <Box
              className="box red"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2500"
            >
              <h2>Team Player</h2>
              <p>
                People matter to me, and I enjoy helping my co-workers and
                working in a team.{" "}
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-team-builder.svg"
                alt="Team Player"
              />
            </Box>

            <Box
              className="box box-down cyan"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="4000"
            >
              <h2>Comunicative</h2>
              <p>
                Communicating in another language is a big plus. I speak
                Portuguese, English, and Hebrew.{" "}
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-calculator.svg"
                alt="Comunicative"
              />
            </Box>
          </Box>
          <Box
            className="row2-container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="5500"
          >
            <Box className="box orange">
              <h2>Creative</h2>
              <p>
                {" "}
                Creativity is essential, and I enjoy seeing new ideas come to
                life.
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-karma.svg"
                alt="Creative"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
