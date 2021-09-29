import "./App.css";
import Tablet from "./Tablet";
import Data from "./data";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="bg-header" src="./images/bg-header-desktop.svg" />
      </header>
      <div className="tablets">
        {/* <Tablet
          NEW={true}
          FEATURE={true}
          logo={"./images/photosnap.svg"}
          company={"Photosnap"}
          position={"Senior Frontend Developer"}
          postedAt={"1d ago"}
          contract={"Full Time"}
          location={"Remote"}
          role={"Frontend"}
          level={"Senior"}
          languages={["HTML", "CSS", "JavaScript"]}
          tools={[]}
        />
        <Tablet
          NEW={true}
          FEATURE={true}
          logo={"./images/photosnap.svg"}
          company={"Photosnap"}
          position={"Senior Frontend Developer"}
          postedAt={"1d ago"}
          contract={"Full Time"}
          location={"Remote"}
          role={"Frontend"}
          level={"Senior"}
          languages={["HTML", "CSS", "JavaScript"]}
          tools={[]}
        /> */}
         {Data.map((item) => (
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
        ))}
      </div>
    </div>
  );
}

export default App;
