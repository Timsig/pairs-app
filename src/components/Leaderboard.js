import React from 'react';
import '../css/modal.css';

class Leaderboard extends React.Component {
    constructor() {
        super();
        this.renderLeaders = this.renderLeaders.bind(this);
        
    }

    renderLeaders(item) {
        return (
            <div key={item.index}>
            {/* <p>{item.index + 1}</p> */}
            <p>{item.name}</p>
            <p>{item.goes}</p>
            </div>
        );
    }

    render() {
        return (
            <div className="modal leaderboard-holder">
                <h2>H<span className="rouge">a</span>ll of f<span className="rouge">a</span>me</h2>
                <div className="leaderboard">
                {this.props.leaders.map(this.renderLeaders)}
                {console.log(this.props.leaders)}
                </div>
            </div>
        )
    }
};

export default Leaderboard;