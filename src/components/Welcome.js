import React from 'react';
import '../css/modal.css';
import Button from './Button';
import Leaderboard from './Leaderboard';

const Welcome = () => {
    return (
        <div className="modal welcome">
            <div className="central-section">
                <h1>An<span className="blue">i</span>mal Fr<span className="blue">i</span>ends</h1>
                <p>Click on the cards to turn them over; try to find matching pairs</p>
                <div><Button class="primary" text="Play the game" to="/game" /></div>
                <div><Button class="secondary" text="Quit" to="/game" /></div>
                <p className="small-text blue">Ilustrations by Felix Signore, programming by Tim Signore</p>
            </div>
            <img className="magoo" src="https://res.cloudinary.com/lwcqviihu/image/upload/v1516314123/Animals/Magoo.svg" alt="magoo"/>
        </div>
    )
};

export default Welcome;