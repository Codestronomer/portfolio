import "./Footer.css";
import twitter from "../../assets/svg/twitter.svg";
import github from "../../assets/svg/github.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-left">
        <div className="find-me">
          <p>find me on:</p>
        </div>

        <div className="socials">
          <div className="socials-border">
            <a
              href="https://twitter.com/_codenaut"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="Twitter profile" />
            </a>
          </div>

          <div className="socials-border">
            <a
              href="https://github.com/codestronomer"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github profile" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-name">
          <p>John Rumide</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
