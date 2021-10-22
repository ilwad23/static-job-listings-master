import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./tabletDesktop.css";
import "./tabletMobile.css";

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
  const [{ tags }, dispatch] = useStateValue();
function setTags(value) {  
  dispatch({ type: "SET_TAGS", tags: [...new Set(value)] });
  dispatch({ type: "FILTER_TAGS" });
}
  return (
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
        <div className="tag" onClick={() => setTags([...tags, role])}>
          {role}
        </div>
        <div className="tag" onClick={() => setTags([...tags, level])}>
          {level}
        </div>
        {languages.map((language) => (
          <div className="tag" onClick={() => setTags([...tags, language])}>
            {language}
          </div>
        ))}
        {tools.map((tool) => (
          <div className="tag" onClick={() => setTags([...tags, tool])}>
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tablet;
