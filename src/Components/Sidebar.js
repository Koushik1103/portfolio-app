import React from "react";
import "./Sidebar.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__behind">
        <div className="sidebar__name">KOUSHIK.</div>
        <div className="sidebar__navOptions">
          <div className="sidebar__about">ABOUT</div>
          <div className="sidebar__line1">|</div>
          <div className="sidebar__projects">PROJECTS</div>
          <div className="sidebar__line2">|</div>
          <div className="sidebar__resume">RESUME</div>
        </div>
      </div>
      <div className="sidebar__topSmallBox">
        <div className="icons">
          <div className="mailIcon">
            <MailOutlineIcon />
          </div>
          <div className="githubIcon">
            <GitHubIcon />
          </div>
          <div className="linkedinIcon">
            <LinkedInIcon />
          </div>
          <div className="instagramIcon">
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
