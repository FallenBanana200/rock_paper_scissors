import { useState, useEffect } from "react";

export function ResultDisplay({ userChoice, computerChoice, result }) {
    const [winStreak, setWinStreak] = useState(0);


    useEffect(() => {
        if (result === 'User wins') {
            setWinStreak((prevWinStreak) => prevWinStreak + 1);
        } else if (result === 'Computer wins') {
            setWinStreak(0);
        }
    }, [result]);

    return (
        <div className="resultDisplay">
            {userChoice && computerChoice && result ? (
                <>
                    <p>User picked: {userChoice}</p>
                    <p>Computer picked: {computerChoice}</p>
                    <p>Result: {result}</p>
                    <p>Winning Streak: {winStreak}</p>
                </>
            ) : (
                <p>Let's play. Pick your weapon from the buttons bellow!</p>
            )}
        </div>
    );
}
