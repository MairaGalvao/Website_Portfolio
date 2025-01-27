import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import '../css/projANDart.css';

const textStyle = {
  fontWeight: 600,
  fontFamily: "Mona Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const textStyleButton = {
  fontWeight: 600,
  fontFamily: "Mona Sans, 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

export function ContainerPortfolio({
  title,
  description,
  description2,
  linkGitHub,
  linkDemo,
  idContainer,
  linkPicture,
  linkArticle,
}) {
  return (
    <>
      <div id={idContainer} className="card card1">
        <div className="main-card">
          <Card>
            <CardMedia
              component="img"
              height="450px"
              width="180px"
              image={linkPicture}
              alt={title}
              style={{ borderRadius: '30px' }}
            />
            <CardContent id="txt-btn-card">
              <div className="text-container">
                <Typography className="white-text" style={textStyle}>
                  {description}
                </Typography>
                <Typography className="white-text" style={textStyle}>
                  {description2}
                </Typography>
              </div>
              <Stack
                spacing={2}
                direction="row"
                className="button-container"
                id="buttons-main"
              >
                {linkDemo && (
                  <a href={linkDemo} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="MuiButtonBase-root button-hover-effect"
                      style={textStyleButton}
                    >
                      Demo
                    </Button>
                  </a>
                )}
                {linkGitHub && (
                  <a
                    href={linkGitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="MuiButtonBase-root button-hover-effect"
                      style={textStyleButton}
                    >
                      Code
                    </Button>
                  </a>
                )}
                {linkArticle && (
                  <a
                    href={linkArticle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="MuiButtonBase-root button-hover-effect"
                      style={textStyleButton}
                    >
                      Article
                    </Button>
                  </a>
                )}
              </Stack>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
