import React, { useState, useEffect } from "react";
import App from "../App";
import style from "../App.css";

// Write your Character component here

const Character = (props) => {
  const [show, setShow] = useState(false);

  console.log(props);

  return (
    <div className="charName">
      <h3>{props.character.name}</h3>
      {show && (
        <ul>
          <li>
            <span>Gender: {props.character.gender}</span>
          </li>
          <li>
            <span>Height: {props.character.height} cm</span>
          </li>
          <li>
            <span>Mass: {props.character.mass}</span>
          </li>
          <li>
            <span>Birth Year: {props.character["birth_year"]}</span>
          </li>
          <li>
            <span>Eye Color: {props.character["eye_color"]}</span>
          </li>
          <li>
            <span>Hair Color: {props.character["hair_color"]}</span>
          </li>
          <li>
            <span>Skin Color: {props.character["skin_color"]}</span>
          </li>
        </ul>
      )}

      {/* <button onClick={() => setShow()}>Show</button>
      <button onClick={() => setHide(false)}>Hide</button> */}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default Character;
