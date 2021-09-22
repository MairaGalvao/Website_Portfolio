import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { ArticlesComponent } from "./ArticlesComponent";
import Typography from "@material-ui/core/Typography";
import Aos from "aos";
import "aos/dist/aos.css";

export function Articles() {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);
  return (
    <>
      <Box className="wrapperArticles" data-aos="fade-right">
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
          Articles
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

      <Box className="header" data-aos="fade-down" data-aos-duration="2000">
        <h1>Adaptable, Skillfull and Multilingual</h1>
        <h1>People are the power!</h1>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "100px",
        }}
      >
        <ArticlesComponent
          title={"Data Analysis"}
          titleTip={"A data analysis on a steak Database"}
          description={
            "A data analysis based on correlations and comparisons among the samples"
          }
          image={"https://miro.medium.com/max/525/1*gM-I1mhLZS7WN3bs_ZDk_g.png"}
          linkMedium={"https://mairagalvao.medium.com"}
        />

        <ArticlesComponent
          title={"Coming soon"}
          description={"Working on it"}
        />

        <ArticlesComponent
          title={"Coming soon"}
          description={"Working on it"}
        />
      </Box>
    </>
  );
}
