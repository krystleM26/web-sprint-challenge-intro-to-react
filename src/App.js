import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character.js";
import "./normal.css";

const App = () => {
  const [charList, setCharList] = useState([]);
  

  useEffect(() => {
    charInfo();
  }, []);

  const charInfo = () => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        console.log("data", res.data);
        setCharList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="charCards">
        {charList.map((item, index) => {
          return <Character character={item} key={index} />;
        })}
      </div>
     
    </div>
  );
};

export default App;
