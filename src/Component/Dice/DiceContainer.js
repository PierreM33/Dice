import React, {useState} from 'react';

const DiceContainer = ({ player, value , rollDice, newGame, hold, disabled }) => {




    return (
        <div className="game-container">
            <div className="game-top">
                <button className="new-game-button" onClick={newGame}>Nouvelle Partie</button>
                <div className="player-info">Joueur {player}</div>
            </div>
            <div className="game-result">
                <div>Valeur dé:</div>
                <div>{value}</div>
            </div>
            <div className="game-bottom">
                <button className="roll-dice-button" onClick={rollDice} disabled={disabled}>Roll Dice</button>
                <button className="hold-button" onClick={hold}>Hold</button>
            </div>
        </div>
    );
}

export default DiceContainer;
