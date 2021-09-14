import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { PortfolioComponent } from "./PortfolioComponent";
import Typography from "@material-ui/core/Typography";
import realBillPic from "../images/realBillPic.jpg";
import flashGeekPic from "../images/flashGeekPic.jpg";
import healthPic from "../images/healthPic.jpg";
import dataAnalPic from "../images/dataAnalPic.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export function Portfolio() {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);
  return (
    <>
      <Box className="wrapperPortfolio" data-aos="fade-right">
        <Typography
          style={{
            fontSize: "100px",
            fontWeight: "bold",
            fontFamily: "monospace",
            color: "white",
            display: "flex",
            marginBottom: "45px",
            paddingLeft: "50px",
            position: "absolute",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Portfolio
        </Typography>
      </Box>

      <svg
        className="separator"
        width="100%"
        viewBox="0.1 0.0 180 40"
        preserveAspectRatio="none"
      >
        <g transform="translate(-18.298844,-77.973964)">
          <path
            style={{ fill: "rgb(232 194 225)" }}
            d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.00000 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"
          />

          <path
            style={{ fill: "rgb(205 232 229)" }}
            d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z"
          />
        </g>
      </svg>
      <Box id="projectPhraseMainBox">
        <Box className="header" data-aos="fade-down" data-aos-duration="2000">
          <h1>Persistence, Determination, Willpower</h1>
          <h1>A hands-on approach!</h1>
        </Box>

        <Box>
          <Box
            id="mainBoxProjects"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridGap: "40px",
              margin: "0px 50px",
            }}
          >
            <PortfolioComponent
              picProject={realBillPic}
              extraTxt={"Extra tech    "}
              extraArrow={"fas fa-arrow-right"}
              extraTech={"https://img.icons8.com/color/48/000000/redux.png"}
              idContainer={"project1"}
              idCard={"cardProj1"}
              title={"The Real Bill"}
              description={"Living Index App - Purchasing Power"}
              technologies1={"    fab fa-react"}
              technologies2={" fab fa-js-square "}
              technologies3={" fab fa-node "}
              technologies4={"fas fa-database"}
              Technology1String={"React"}
              Technology2String={"Javascript"}
              Technology3String={"Node.js"}
              Technology4String={"MongoDB"}
              techTxt={
                "Technologies used: Node.js, MongoDB, React(React Hooks), Redux, JavaScript and Material UI."
              }
              linkGitHub={"https://github.com/MairaGalvao/TheRealBillApp"}
              linkDemo={"https://therealbill-6c919.web.app"}
              IDE={"Environment: Studio Visual Code"}
            />

            <PortfolioComponent
              picProject={flashGeekPic}
              extraTxt={""}
              extraArrow={""}
              extraTech={""}
              idContainer={"project2"}
              idCard={"cardProj2"}
              title={"I Flash Geek "}
              description={"Flashcards on computer languages."}
              technologies1={" fab fa-js-square "}
              technologies2={"fab fa-css3-alt"}
              technologies3={"fab fa-html5"}
              technologies4={"fas fa-database"}
              Technology1String={"Javascript"}
              Technology2String={"CSS 3"}
              Technology3String={"HTML 5"}
              Technology4String={"Mock NoSQL DB"}
              techTxt={
                "Technologies used: Javascript, CSS, HTML, complex data structures"
              }
              linkGitHub={"https://github.com/MairaGalvao/I_Flash_Geek"}
              linkDemo={"https://iflashgeek.web.app/"}
              IDE={"Environment: Studio Visual Code"}
            />
            <PortfolioComponent
              picProject={healthPic}
              extraTxt={" Extra tech: API's fetch"}
              extraArrow={""}
              extraTech={""}
              idContainer={"project3"}
              idCard={"cardProj3"}
              title={"Health Care Analysis"}
              description={"Health care measurements app."}
              technologies1={" fab fa-js-square "}
              technologies2={" fab fa-node "}
              technologies3={"fab fa-css3-alt"}
              technologies4={"fab fa-html5"}
              Technology1String={"Javascript"}
              Technology2String={"Node.js"}
              Technology3String={"CSS 3"}
              Technology4String={"HTML 5"}
              techTxt={
                "Technologies used: Node.js (routing and fetching data), Javascript, CSS, HTML, HTTP requests to APIs."
              }
              linkGitHub={
                "https://github.com/MairaGalvao/International_Health_Care_Analysis"
              }
              
              IDE={"Environment: Studio Visual Code"}
            />

            <PortfolioComponent
              picProject={dataAnalPic}
              extraArrow={""}
              extraTxt={""}
              extraTech={""}
              idContainer={"project4"}
              idCard={"cardProj4"}
              title={"Data analysis"}
              description={"An analysis on a steak data"}
              technologies1={"fab fa-python"}
              technologies2={"fas fa-database"}
              technologies3={"fas fa-chart-line"}
              technologies4={"fas fa-chart-pie"}
              Technology1String={"Python"}
              Technology2String={"Raw Data"}
              Technology3String={"NumPy - Pandas"}
              Technology4String={"Matplotlib"}
              techTxt={
                "Technologies used: Python, Pandas, NumPy, Matplotlib, Seaborn."
              }
              linkGitHub={"https://github.com/MairaGalvao/Steak_Risk_Data"}
              IDE={"Environment: PyCharm"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
