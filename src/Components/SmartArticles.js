import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { DummyArticles } from "./DummyArticles"; // Import the DummyArticles component

const articleData = [
  {
    title: "Exploratory data analysis on a Steak Risk dataset",
    titleTip: "Data Analysis",
    image: "https://images.unsplash.com/photo-1588347818036-558601350947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    linkMedium: "https://medium.com/swlh/practical-data-analysis-with-pandas-and-seaborn-matplotlib-d1820ab27fd8",
  },
  {
    title: "HackZurich is the largest hackathon in Europe.",
    titleTip: "Zürich, Switzerland",
    image: "https://maira-galvao-portfolio.web.app/static/media/hackathon.73bb284b.jpg",
    linkMedium: "https://github.com/MairaGalvao/Hackthon_Zurich",
  },
  // Add more objects for additional smart articles
];

export const SmartArticles = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <Box id="articles" data-aos="fade-right">
        <Typography
          style={{
            fontSize: "100px",
            fontWeight: "bold",
            fontFamily: "monospace",
            color: "white",
            marginBottom: "45px",
          }}
        ></Typography>
      </Box>
      <Box className="header" data-aos="fade-down" data-aos-duration="2000">
        <h1 className="title">Adaptable & Multilingual</h1>
        <h1 className="subTitle">People are the power!</h1>
        <p className="text">
          Here are a few side projects I've worked on recently.
        </p>
      </Box>
      <Box
        id="articlesMainBox"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: "100px",
          padding: "10px",
        }}
      >
        <Box id="articlesBox">
          {articleData.map((article, index) => (
            <DummyArticles
              key={index}
              topic={article.topic}
              title={article.title}
              titleTip={article.titleTip}
              image={article.image}
              linkMedium={article.linkMedium}
              isSmartArticle={true}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};
