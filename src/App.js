import React, { useEffect, useState } from "react";
import "./App.css";
import Tablet from "./Tablet";
import Data from "./data";

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
  const filteredData = Data.filter((item) => item);
  const allData = filteredData.map((item) => (
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
  console.log(filteredData);
  return (
    <div className="App">
      <header className="App-header">
        <img className="bg-header" src={`./images/bg-header-${desktopOrMobile}.svg`} />
      </header>
      <div className="tablets">
        {/* <Fi */}
        {allData}
      </div>
    </div>
  );
}

export default App;
