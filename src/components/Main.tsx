import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQHCwZ3ASdIl5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692348340304?e=1736380800&v=beta&t=cdy7zdMKyUdJGMvthhcAd9PSBX7WtdjgLfTDYrgPHKA"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.linkedin.com/in/richardrietdijk"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/richardrietdijk"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:info@richardrietdijk.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
            <a
              href="./../assets/files/CV_Richard_Rietdijk.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </div>
          <h1>Richard Rietdijk</h1>
          <p>Data Scientist</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/richardrietdijk"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/richardrietdijk/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
