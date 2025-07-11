import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import meImage from '../assets/images/me_edited.jpg'; 
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={meImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/smit-6690" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/smit-ardeshana-956512220/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Smit Ardeshana</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/smit-6690" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/smit-ardeshana-956512220/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;