import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box,Paper, Typography, Button, Grid, Link as ScrollLink } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import "../css/articles.css";

export function ContainerArticles({
  linkMedium,
  title,
  description,
  image,
  titleTip,
  topic,
  date,
  location,
  ps,
  projectPic,
  gitHubLink,
  moreAbout,
  isSmartArticle = false,
}) {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);

  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "250px",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    marginBottom: "20px",
    cursor: "pointer",
  };

  const buttonStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: 600,
    fontFamily: "Mona Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  };

  const container = {

    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    paddingTop: '100px',

  }

  return (
    <Grid item xs={6}>
      <Paper style={cardStyle} elevation={3}>
        <Grid container spacing={2} style={container}>
          <Grid item xs={12}>
            <Box className="card-body" id="content-card-article">
              <ScrollLink to="linkMedium" spy={true} smooth={true}>
                {topic}
              </ScrollLink>
              <Typography variant="h5" id="titleArticle" style={{ color: "white" }}>
                {title}
              </Typography>
              <Typography variant="body1" style={{ color: "white" }}>
                {titleTip}
              </Typography>
              <Box className="user">
                <Box className="user-info">
                  {linkMedium && (
                     <a
                     href={linkMedium}
                     target="_blank" // Open in a new tab
                     rel="noopener noreferrer" // Security best practice
                   >
                   
                   <Button
                      variant="contained"
                      color="primary"
                      startIcon={<GitHub />}
                      component="a"
                      href={gitHubLink}
                      target="_blank"
                      style={buttonStyle}
                    >
                      GitHub
                    </Button>
                    </a>
                  )}
                  <Typography variant="caption" style={{ color: "white" }}>
                    {date}
                  </Typography>
                  <Typography variant="h6" style={{ color: "white" }}>
                    {location}
                  </Typography>
                              </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
