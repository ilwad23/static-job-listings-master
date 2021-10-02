import React from "react";
import "./tablet.css";

function Tablet({
  NEW,
  FEATURED,
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
}) {
  return (
    <>
      <div className="filter"></div>
      <div className="wrapper tablet">
        {FEATURED && <div className="rec"></div>}
        <div className="left">
          <div className="info">
            <img className="logo" src={logo} />
            <div className="text">
              <div className="top">
                <div className="company">{company}</div>
                {NEW && <div className="new status">NEW!</div>}
                {FEATURED && <div className="feature status">feature</div>}
              </div>
              <div className="position">{position}</div>
              <div className="bottom">
                <p>{postedAt + " "}</p>
                <p>•</p>
                <p>{" " + contract + " "}</p>
                <p>•</p>
                <p>{" " + location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="tag">{role}</div>
          <div className="tag">{level}</div>
          {languages.map((language) => (
            <div className="tag">{language}</div>
          ))}
          {tools.map((tool) => (
            <div className="tag">{tool}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tablet;
