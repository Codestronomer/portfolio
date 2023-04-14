import "./Projects.css";
import rec1 from "../../assets/svg/devask (2).png";
import rec2 from "../../assets/svg/Terminal.jpg";

function Cards(props) {
  return (
    <div id="projects" className="project">
      <div id="project-title">
        <p className="project-title">{props.title}</p>
        <p className="project-subtitle">{props.lang}</p>
      </div>

      <div className="project-card">
        <img src={props.img} alt="placeholder" />

        <p className="project-description">{props.desc}</p>

        <div className="view-project">
          <a href={props.url} target="_blank" rel="noreferrer">
            view-project
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="Projects">
      <div className="projects-title">
        <p>Featured projects</p>
      </div>

      <div className="projects-cards">
        <Cards
          title="Devask"
          lang="// python(fastAPI), React"
          img={rec1}
          desc="Devask is an application that allows developers to connect and get answers to technical questions"
          url="https://devask.tech"
        />
        <Cards
          title="Monty interpreter"
          lang="// C"
          img={rec2}
          desc="An interpreter for Monty bytecodes written in C"
          url="https://github.com/Codestronomer/monty"
        />
        {/* <Cards */}
        {/* <Cards
          title="ChowAI"
          lang="// python(fastAPI)"
          img={rec1}
          desc="ChowAi is an AI-powered application that provides a wide variety of recipes for African dishes and also suggests dishes based on user-inputted ingredients."
          url="https://chowai.com"
        /> */}
        {/* <Cards
          title="StreetRates"
          lang="// python(fastAPI)"
          img={rec2}
          desc="StreetRates is an application that allows users to convert currencies using the parallel bank rate. It also provides users with additional information about currency fluctuations and helps them to make informed decisions about international transactions."
          url="https://streetrates.info"
        /> */}
        {/* <Cards
          title="ChowAI"
          lang="// python(fastAPI)"
          img={rec1}
          desc="ChowAi is an AI-powered application that provides a wide variety of recipes for African dishes and also suggests dishes based on user-inputted ingredients."
          url="https://chowai.com"
        /> */}
        {/* <Cards
          title="StreetRates"
          lang="// python (fastAPI)"
          img={rec2}
          desc="StreetRates is an application that allows users to convert currencies using the parallel bank rate. It also provides users with additional information about currency fluctuations and helps them to make informed decisions about international transactions."
          url="https://streetrates.info"
        /> */}
      </div>
    </div>
  );
}

export default Projects;
