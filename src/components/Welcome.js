import React from 'react';
import '../css/modal.css';
import Button from './Button';

const Welcome = () => {
    return (
        <div className="modal welcome">
            <div className="welcome-grid">
                <div className="cat-container">
                    <img className="cat" src="https://res.cloudinary.com/lwcqviihu/image/upload/v1517341454/Animals/Milo/Cat.svg" alt="cat" />
                </div>
                <div className="centre-container">
                    <h1>An<span className="blue">i</span>mal Fr<span className="blue">i</span>ends</h1>
                    <p>Click on the cards to turn them over; try to find matching pairs</p>
                    <div className="button-holder">
                        <Button class="secondary" text="Quit" to="/#" />
                        <Button class="primary" text="Play the game" to="/game" />
                    </div>
                    <p className="small-text blue">Illustrations by Felix & Milo Signore, programming by Tim Signore</p>
                </div>
                <div className="magoo-container">
                    <img className="magoo" src="https://res.cloudinary.com/lwcqviihu/image/upload/v1516314123/Animals/Magoo_rouge.svg" alt="magoo"/>   
                </div>
            </div>
        </div>
    )
};

export default Welcome;