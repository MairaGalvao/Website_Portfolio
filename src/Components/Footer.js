import "../css/footer.css";

import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export function Footer() {
  const [value, setValue] = React.useState("");

  const CustomBottomNavigation = (props) => {
    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {props.children}
      </BottomNavigation>
    );
  };

  return (
    <>
      {" "}
      <div id="footer">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            target="_blank"
            href="https://github.com/MairaGalvao"
            label="GitHub"
            icon={<GitHubIcon />}
          />

          <BottomNavigationAction
            target="_blank"
            href="https://www.linkedin.com/in/maira-galvao/"
            label="LinkedIn"
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            target="_blank"
            href="https://mairagalvao.medium.com/"
            label="Medium"
            icon={<AutoStoriesIcon />}
          />
        </BottomNavigation>
      </div>
    </>
  );
}
