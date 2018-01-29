import React from 'react';
import '../css/modal.css';
import Button from './Button';

class Gameover extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div className="modal welcome">

                <h2>W<span className="blue">e</span>ll don<span className="blue">e</span>!</h2>
                <p className="scoreline">You found all the pairs in <span className="rouge">{this.props.goes}</span> goes</p>
                <div className="button-holder">
                    <Button class="secondary" text="Quit" to="/goodbye" />
                    <Button class="primary" text="Play again" to="/game" />
                </div>
            </div>
        )
    }
}

export default Gameover;

