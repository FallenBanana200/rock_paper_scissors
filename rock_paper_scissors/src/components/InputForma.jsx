import { GiRock, GiPaper, GiScissors } from "react-icons/gi";
import { IconButton } from "@mui/material";
import { ResultDisplay } from "./ResultDisplay";
import { useState } from "react";
import { playGame } from "../functions/gameLogic";
import '../App.css';

export function InputForma() {
    const [weapon, setWeapon] = useState('');
    const [result, setResult] = useState(null);

    function handleWeaponChange(chosenWeapon) {
        setWeapon(chosenWeapon);
        const gameResult = playGame(chosenWeapon);
        if (gameResult) {
            setResult(gameResult);
        }
    }

    return (
        <>
            <h2 id="secondTitle">Pick your weapon</h2>
            <div className="buttonChoices">
                <IconButton className="button" onClick={() => handleWeaponChange('rock')}>
                    <GiRock />
                </IconButton>
                <IconButton className="button" onClick={() => handleWeaponChange('paper')}>
                    <GiPaper />
                </IconButton>
                <IconButton className="button" onClick={() => handleWeaponChange('scissors')}>
                    <GiScissors />
                </IconButton>
            </div>
            <ResultDisplay
                userChoice={result?.userChoice}
                computerChoice={result?.computerChoice}
                result={result?.winner}
            />
        </>
    );
}
