import React from 'react';
import '../css/welcome.css';
import Button from './Button';
import Leaderboard from './Leaderboard';

const Welcome = () => {
    return (
        <div className="welcome">
            <h1> Felix's pairs game</h1>
            <Button text="Play" to="/game" />
            <h2>Leader Board</h2>
            <Leaderboard />
        </div>
    )
};

export default Welcome;