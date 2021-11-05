import React, { useState, useEffect } from 'react';
import App from '../App';
import style from '../App.css'



// Write your Character component here
const Character = (props) => {
    console.log(props);

    return (
        <div className= "charName">
            <h3>Luke Skywalker</h3>
                <ul>
                    <li>
                        gender:
                    </li>
                    <li>
                        age:
                    </li>
                </ul>
        </div>
    )
}





export default Character