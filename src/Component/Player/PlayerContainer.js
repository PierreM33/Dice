import React, {useEffect, useState} from 'react';


const PlayerContainer = ({ player, score, currentScore, history }) => {

    const limitedHistory = history ? history.slice(-5) : [];

    return (
        <div className="player-container">
            <div className="player-name">{player}</div>
            <div className="player-score">{score}</div>
            <div className="current-score">
                <span>{currentScore}</span>
            </div>
            <div className="history-container">
                <h2>Historique</h2>
                <ul>
                    {limitedHistory.map((item, index) => (
                        <li key={index}>N° {index + 1} - {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PlayerContainer;
