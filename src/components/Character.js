import React, { useState, useEffect } from 'react';
import App from '../App';
import style from '../App.css'




// Write your Character component here
const Character = (props) => {
   console.log(props);

    return (
        <div className= "charName">
            <h3>{props.character.name}</h3>
                <ul>
                    <li><span>
                        Gender: {props.character.gender}
                    </span></li>
                    <li>
                        Height: {props.character.height} cm
                    </li>
                    <li>
                        Mass: {props.character.mass}
                    </li>
                    <li>
                        Birth Year: {props.character["birth_year"]}
                    </li>
                    <li>
                        Eye Color: {props.character["eye_color"]}
                    </li>
                    <li>
                        Hair Color: {props.character["hair_color"]}
                    </li>
                    <li>
                        Skin Color: {props.character["skin_color"]}
                    </li>
                </ul>
        </div>
    )
}





export default Character