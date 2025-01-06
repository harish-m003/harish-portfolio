import React, { useState } from "react";
import './Style.css';
import Guesscheck from "./Guesscheck";

const secretnum = Math.floor(Math.random() * 10) +1 ;

function Guessgame() {

    const [term,setterm]=useState('')

    const change = (e)=>{
        setterm(e.target.value)
    }

    return (
        <div className="guess-game">
            <div className="guess-num">
                <label htmlFor="term">Guess the number between 1 to 10</label>
                <input type="text" id="term" name="term" onChange={change} maxLength='2' />
            </div>
            <Guesscheck secretnum={secretnum} term={term}/>
        </div>
    )
}

export default Guessgame