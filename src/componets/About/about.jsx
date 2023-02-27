import "./about.css";
import Second from "../../img/second.jpg";
const About = () => {
  const links = [
    {
      id: 1,
      child: <>Download CV</>,
      href: "/resume.pdf",
      download: true,
    },
  ];
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Second} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">I'm a MeanStack Developer🤗</p>
        <p className="a-desc">
          React/Software Developer with 4+ years designing useful,approachable
          user interface,considerable Backend development skills. Knowledgeable
          on all aspects of webiste desgin and best practices and emerging Ui
          development techniques.Skilled at connecting exceptional assets with
          users via creative UI Framework and careful user experience.
        </p>
        <br />
        {links.map(({ id, child, href, download }) => (
          <button>
            <a
              style={{ color: "#fff" }}
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default About;
