import React from 'react';
import Button from './Button';
import '../css/modal.css';
// import base from '../base';

class Leaderboard extends React.Component {
    constructor() {
        super();
        this.renderLeaders = this.renderLeaders.bind(this);
        
    }

    // componentWillMount() {
    //     this.props.syncLeaders();
    // }

    // componentWillUnmount() {
    //     this.props.unsynch
    // }

    renderLeaders(item, i) {
        return (
            <div className="leaderboard-row" key={i}>
            <p className="leader-position">{i + 1}</p>
            <p className="leader-name">{item.name}</p>
            <p className="leader-goes">{item.goes}</p>
            </div>
        );
    }

    render() {
        return (
            <div className="modal leaderboard-holder">
                <img className="small-creature1" src="https://res.cloudinary.com/lwcqviihu/image/upload/v1516314124/Animals/smallCreature1_rouge.svg" alt="small-creature1" />
                <img className="small-creature2" src="https://res.cloudinary.com/lwcqviihu/image/upload/v1516314124/Animals/smallCreature2_rouge.svg" alt="small-creature2" />
                <h2>H<span className="rouge">a</span>ll of f<span className="rouge">a</span>me</h2>
                <div className="leaderboard">
                    <div className="leaderboard-row">
                            <p></p><p>Name</p><p>Goes</p>
                    </div>
                    <div className="leaderboard-stats">
                        {this.props.leaders.map(this.renderLeaders)}
                    </div>
                </div>
                <div className="button-holder">
                    <Button class="secondary" text="Quit" to="/#" />
                    <Button class="primary" text="Play again" to="/game" />
                </div>
            </div>
        )
        
    }
};

export default Leaderboard;