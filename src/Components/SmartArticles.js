import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { DummyArticles } from "./DummyArticles";
import Typography from "@material-ui/core/Typography";
import Aos from "aos";
import "aos/dist/aos.css";

export function SmartArticles() {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);
  return (
    <>
      <Box
        className="wrapperArticles"
        data-aos="fade-right"
        data
        style={{ paddingTop: "180px" }}
      >
        <Typography
          style={{
            fontSize: "100px",
            fontWeight: "bold",
            fontFamily: "monospace",
            color: "white",
            display: "flex",
            marginBottom: "45px",
            paddingLeft: "50px",
    
            fontFamily: "Poppins, sans-serif",
          }}
        ></Typography>
      </Box>

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
        <DummyArticles
          title={"Data Analysis"}
          titleTip={"A data analysis on a steak Database"}
       
          image={"https://miro.medium.com/max/525/1*gM-I1mhLZS7WN3bs_ZDk_g.png"}
          linkMedium={"https://mairagalvao.medium.com"}
          description={'Read'}
        />

        <DummyArticles title={"Web Scraping"} description={"Coming soon"} linkMedium={''}/>

        <DummyArticles title={"Coming soon"} description={"Coming soon"} />
      </Box>
    </>
  );
}
