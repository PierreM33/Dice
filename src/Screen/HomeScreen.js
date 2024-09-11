import PlayerContainer from "../Component/Player/PlayerContainer";
import DiceContainer from "../Component/Dice/DiceContainer";
import {useEffect, useState} from "react";
import diceSound from '../Assets/diceSound.mp3';

const HomeScreen = ()  => {

    const [diceValue, setDiceValue] = useState(0);
    const [player, setPlayer] = useState(1);
    const [disabled, setDisabled] = useState(false);
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [playerCurrentScore, setPlayerCurrentScore] = useState(0);
    const [historyPlayer1, setHistoryPlayer1] = useState([]);
    const [historyPlayer2, setHistoryPlayer2] = useState([]);

    useEffect( () => {
        endGame();
    }, [diceValue]);

    const rollDice = () => {
        setDisabled(true)
        const audio = new Audio(diceSound);
        audio.play();

        const value = Math.floor(Math.random() * 6) + 1;
        setDiceValue(value);
        if(player === 1) {
            setHistoryPlayer1([...historyPlayer1, value]);
        } else {
            setHistoryPlayer2([...historyPlayer2, value]);
        }
        addScore(value);
        setDisabled(false)
    }

    const addScore = (thisValue) => {
        if(player === 1) {
            setPlayerCurrentScore(playerCurrentScore + thisValue);
        } else {
            setPlayerCurrentScore(playerCurrentScore + thisValue);
        }
    }

    const hold = () => {
        if(player === 1) {
            setPlayer1Score(player1Score + playerCurrentScore);
            setPlayerCurrentScore(0);
            setPlayer(2);
        } else {
            setPlayer2Score(player2Score + playerCurrentScore);
            setPlayerCurrentScore(0);
            setPlayer(1);
        }
    }

    const endGame = () => {
        if(player1Score + playerCurrentScore >= 100) {
            alert('Le joueur 2 gagne la partie');
            newGame();
        } else if(player2Score + playerCurrentScore >= 100) {
            alert('Le joueur 1 gagne la partie');
            newGame();
        }
    }

    const newGame = () => {
        setDiceValue(null);
        setPlayer(1);
        setPlayerCurrentScore(0);
        setPlayer1Score(0);
        setPlayer2Score(0);
        setHistoryPlayer1([]);
        setHistoryPlayer2([]);
    }

    return (
        <div className="containerHomeScreen">
            <PlayerContainer
                player="Player 1"
                score={player1Score}
                currentScore={player === 1 ? playerCurrentScore : 0}
                history={historyPlayer1}
            />
            <DiceContainer
                rollDice={rollDice}
                player={player}
                value={diceValue}
                newGame={newGame}
                hold={hold}
                disabled={disabled}
            />
            <PlayerContainer
                player="Player 2"
                score={player2Score}
                currentScore={player === 2 ? playerCurrentScore : 0}
                history={historyPlayer2}
            />
        </div>
    );
}


export default HomeScreen;
