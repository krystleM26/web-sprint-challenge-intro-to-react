import React, { useState, useEffect } from "react";
import App from "../App";
import style from "../App.css";
import arrow from "../images/down-arrow.svg";

// Write your Character component here

const Character = (props) => {
  const [onDisplay, setOnDisplay] = useState(false);

  console.log(props);

  return (
    <div className="charName">
      <div className="arrow">
        <h3>{props.character.name}</h3>
        <img onClick={() => setOnDisplay(!onDisplay)} src={arrow} />
      </div>

      {onDisplay && (
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
    </div>
  );
};

export default Character;
