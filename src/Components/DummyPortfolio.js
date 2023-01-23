import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/projANDart.css";

export function DummyPortfolio({
  title,
  description,

  linkGitHub,
  linkDemo,
  idContainer,

  idCard,
  descriptionApp,
  linkPicture,
  linkArticle,
}) {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);

  return (
    <>
      <Box id={idContainer} class="mainBox">
        <Box data-aos="fade-down" data-aos-duration="2000">
          <Box
            className="cardPortfolio"
            id={idCard}
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <ul id="portFolioCards">
              <li
                class="booking-card"
                style={{
                  backgroundImage: linkPicture,
                  height: "500px",
                }}
              >
                <div class="book-container">
                  <div class="content">
                    {linkDemo && (
                      <a href={linkDemo} class="btn" target="_blank">
                        Demo
                      </a>
                    )}

                    {linkArticle && (
                      <a target="_blank" href={linkArticle} class="btn">
                        Article
                      </a>
                    )}
                  </div>
                </div>

                <div class="informations-container">
                  <h2 class="title"> {title}</h2>
                  <p class="sub-title">{description}</p>

                  <div class="more-information">
                    <div class="info-and-date-container"></div>

                    <p class="disclaimer">{descriptionApp}</p>

                    {linkGitHub && (
                      <a
                        target="_blank"
                        class="fab fa-github"
                        style={{ fontWeight: "bold" }}
                        href={linkGitHub}
                      >
                        {"< Code >"}
                      </a>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </>
  );
}
