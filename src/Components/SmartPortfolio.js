import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { DummyPortfolio } from "./DummyPortfolio";
import Typography from "@material-ui/core/Typography";
import realBillPic from "../images/realBillPic.jpg";
import flashGeekPic from "../images/flashGeekPic.jpg";
import healthPic from "../images/healthPic.jpg";
import dataAnalPic from "../images/dataAnalPic.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export function SmartPortfolio() {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);
  return (
    <>
      <Box
        className="wrapperPortfolio"
        data-aos="fade-right"
        style={{ paddingTop: "180px" }}
      >
        <Typography
          style={{
            fontSize: "100px",
            fontWeight: "bold",
            fontFamily: "monospace",
            color: "white",
            display: "flex",

            paddingLeft: "50px",
            position: "absolute",
            fontFamily: "Poppins, sans-serif",
          }}
        ></Typography>
      </Box>

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
            <DummyPortfolio
              picProject={realBillPic}
              extraTxt={"Extra tech"}
              extraArrow={"fas fa-arrow-right"}
              extraTech={"https://img.icons8.com/color/48/000000/redux.png"}
              idContainer={"project1"}
              idCard={"cardProj1"}
              title={"The Real Bill"}
              description={"Living Index App - Purchasing Power"}
              technologies1={"fab fa-react"}
              technologies2={"fab fa-js-square"}
              technologies3={"fab fa-node"}
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

            <DummyPortfolio
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
            <DummyPortfolio
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

            <DummyPortfolio
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
