import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

export function PortfolioComponent({
  title,
  description,
  technologies1,
  technologies2,
  technologies3,
  technologies4,
  Technology1String,
  Technology2String,
  Technology3String,
  Technology4String,
  linkGitHub,
  linkDemo,
  idContainer,
  extraTech,
  extraArrow,
  extraTxt,
  picProject,
  idCard,
}) {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);

  return (
    <>
      <Box id={idContainer} style={{ flex: " 1 0 50%" }}>
        <Box data-aos="fade-down" data-aos-duration="2000">
          <Box
            className="cardPortfolio"
            id={idCard}
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img src={picProject} alt={title} className="card__image" />

            <p className="card__name"  style={{     fontFamily: "Poppins, sans-serif"}} >{title}</p>

            <Box
              className="grid-child-posts"
              style={{ textAlign: " center", paddingTop: '10px', paddingBottom: "5px", fontSize: '17px',
              fontFamily: "Fira Sans Condensed, sans-serif"}}
            >
              {description}
            </Box>

            <ul className="social-icons-portfolio">
              <li className="tooltip">
                <a>
                  <span className="tooltiptext">{Technology1String}</span>
                  <i className={technologies1}></i>
                </a>
              </li>

              <li className="tooltip">
                <a>
                  <span className="tooltiptext">{Technology2String}</span>
                  <i className={technologies2}></i>
                </a>
              </li>

              <li className="tooltip">
                <a>
                  <span className="tooltiptext">{Technology3String}</span>
                  <i className={technologies3}></i>
                </a>
              </li>

              <li className="tooltip">
                <a>
                  <span className="tooltiptext">{Technology4String}</span>
                  <i className={technologies4}></i>
                </a>
              </li>
            </ul>

            <Box style={{}}>
              {linkGitHub && (
                <Box className="btnPortfolio draw-border">
                  {" "}
                  <a id="gitHubBtnCard"  href={linkGitHub} >
                    GitHub
                  </a>
                </Box>
              )}
              {linkDemo && (
                <Box className="btnPortfolio draw-border">
                  {" "}
                  <a id="demoBtnCard" href={linkDemo}>
                    Try me!
                  </a>
                </Box>
              )}
            </Box>

            <Box className="grid-child-followers" >
              {extraTxt}
              <a>
                <i className={extraArrow}> </i>

                <img
                  style={{ width: "30px", paddingBottom: "0" }}
                  src={extraTech}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
