import React from 'react';

class Card extends React.Component {
    constructor() {
        super();
        this.turn = this.turn.bind(this);
        this.cardClick = this.cardClick.bind(this);

        this.state = {
            flipped: false
        };
    }

    cardClick(event) {
        if (this.props.doTurn) {
            this.turn();
            this.props.clickHandle(this);
        }
    }

    turn() {
        this.setState({
            flipped: true
        });
    }

    turnBack() {
        this.setState({
            flipped: false
        });
    }

    render() {
        let frontStyles = {
            color: this.props.color,
            background: this.props.bg_color,
            borderColor: this.props.color,
            borderStyle: "solid",
            borderWidth: "2px"
        };
        let compClasses = ['card'];
        if (this.state.flipped) {
            compClasses.push('flipped')
        }

        return (
            //******************Pass in onClick as prop, to allow it to be conditional, dependant on 2 turned, call onClick={this.props.onClick} currently onClick={this.cardClick*/
            <div className={compClasses.join(' ')} onClick={this.cardClick}>
                <div className="front-face" style={frontStyles}>
                    <img src={this.props.image} />
                    <p>{this.props.animal}</p>
                </div>
                <div className="back-face"></div>
            </div>
        );
    }
};

export default Card;