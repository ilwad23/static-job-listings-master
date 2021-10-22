import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "./App.css";
import Tablet from "./Tablet";
import "./tabletDesktop.css";
import "./tabletMobile.css";

const useScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size > 700 ? "desktop" : "mobile";
};

function App() {
  const desktopOrMobile = useScreenSize();
  const [{ tags, filteredData }, dispatch] = useStateValue();

  function cancelTag(tag) {
    dispatch({ type: "CANCEL_TAG", tag: tag });
    dispatch({ type: "FILTER_TAGS" });
  }

  const tablets = filteredData.map((item) => (
    <Tablet
      key={item.id}
      NEW={item.new}
      FEATURED={item.featured}
      logo={item.logo}
      company={item.company}
      position={item.position}
      postedAt={item.postedAt}
      contract={item.contract}
      location={item.location}
      role={item.role}
      level={item.level}
      languages={item.languages}
      tools={item.tools}
    />
  ));
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="bg-header"
          src={`./images/bg-header-desktop.svg`}
        />
        {tags.length > 0 && (
          <div className="filter ">
            <div className="filterTags ">
              {tags.map((tag) => (
                <div className="filterTagWrapper">
                  <div className="filterTag">{tag}</div>
                  <div className="filterCancel" onClick={() => cancelTag(tag)}>
                    <img src="./images/icon-remove.svg" />
                  </div>
                </div>
              ))}
            </div>
            <p
              className="filterClear"
              onClick={() => dispatch({ type: "CLEAR_TAGS" })}
            >
              Clear
            </p>
          </div>
        )}
      </header>
      <div className="tablets">{tablets}</div>
    </div>
  );
}

export default App;
