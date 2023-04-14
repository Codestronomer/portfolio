import "./AboutMe.css";
import rightArrow from "../../assets/svg/rightarrow.svg";
import purpleDir from "../../assets/svg/purplediricon.svg";
import downArrow from "../../assets/svg/downarrow.svg";
import greenDir from "../../assets/svg/greendiricon.svg";
import mailIcon from "../../assets/svg/mail-icon.svg";

function AboutMe() {
  return (
    <div id="aboutMe" className="aboutMe">
      <div className="about">
        <p>about me</p>
      </div>

      <div className="aboutTable">
        <div className="contents">
          <div className="about-table-left">
            <div className="personal-info-title">
              <img src={downArrow} alt="down arrow"></img>
              <p>personal-info</p>
            </div>

            <div className="tableofcontent">
              <div className="bioTable">
                <img src={rightArrow} alt="right arrow"></img>
                <img src={purpleDir} alt="purple directory icon"></img>
                <p>bio</p>
              </div>
              <div className="interestsTable">
                <img src={rightArrow} alt="right arrow"></img>
                <img src={greenDir} alt="green directory icon"></img>
                <p>interests</p>
              </div>
            </div>

            <div className="contact-big">
              <img src={downArrow} alt="down arrow"></img>
              <p>contact-me</p>
            </div>
            <div className="contact-email-big">
              <img src={mailIcon} alt="mail icon"></img>
              <p>johnrumide6@gmail.com</p>
            </div>
          </div>

          <div className="personal-info">
            <div className="bio">
              <div className="bioHeader">
                <p>// personal-info</p>
                <p>/ bio</p>
                <p>personal-info</p>
                <div className="border-left"></div>
              </div>
              <p className="bioContent">
                I am a software developer who has gained valuable experiences
                over the past two years in a wide range of programming languages and frameworks.
                <br />
                <br />
                 My skills include expertise in Python, NodeJS, TypeScript, C, C++, Bash, SQL, HTML, CSS, and Git tools.I have extensive experience working with popular frameworks such as FastAPI, ExpressJS, React, Django, Flask, and Bootstrap.
                <br />
                <br />
                In my work, I prioritize the use of Git for version control and collaboration.
                I'm committed to ensuring that my code is well-documented and easy to understand.
                <br />
                <br />As a quick learner,
                I am always seeking to expand my skills and knowledge in the field.
                I am passionate about creating high-quality, scalable software solutions that meet the needs of end-users and am confident that I can make a valuable contribution to any team.
              </p>
            </div>

            <div className="interests">
              <div className="interestsHeader">
                <p>// personal-info</p>
                <p>/ interests</p>
                <p>interests</p>
                <div className="border-left"></div>
              </div>
              <div className="interestsContent">
                <p className="grey-text">Watching Anime and Scifi-movies</p>
                <p className="orange-text">Writing code</p>
                <p className="grey-text">Astronomy</p>
                <p className="orange-text">Playing games</p>
                <p className="grey-text">bit of an Audiophile</p>
              </div>
            </div>

            <div className="personal-info-title contact-small">
              <img src={downArrow} alt="down arrow"></img>
              <p>contact-me</p>
            </div>
            <div className="contact-email contact-small">
              <img src={mailIcon} alt="mail icon"></img>
              <p>johnrumide6@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
