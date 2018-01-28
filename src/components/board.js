import React from 'react';
import Card from './Card';
import { Redirect } from 'react-router';

class Board extends React.Component {
    constructor() {
        super();
        this.createCard = this.createCard.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.cardClick = this.cardClick.bind(this);
        this.checkCards = this.checkCards.bind(this);
        this.turnCards = this.turnCards.bind(this);
        this.removePair = this.removePair.bind(this);
        this.gameOver = this.gameOver.bind(this);

        this.animals = [
            {
                key: 1,
                animal: "sloth",
                image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898858/Animals/Sloth_svg.svg",
                color: "#EDCB7A",
                bg_color: "#487360"
            },
            {
                key: 2,
                animal: "butterfly",
                image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Butterfly_svg.svg",
                color: "#864BFF",
                bg_color: "#9A9DD7"
            },
            {
                key: 3,
                animal: "elephant",
                image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Elephant_svg.svg",
                color: "#083EA7",
                bg_color: "#D6E7E1"
            },
            // {
            //     key: 4,
            //     animal: "turtle",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898860/Animals/Turtle_svg.svg",
            //     color: "#394F98",
            //     bg_color: "#9DB7A4"
            // },
            // {
            //     key: 5,
            //     animal: "snail",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898859/Animals/Snail_svg.svg",
            //     color: "#3A275E",
            //     bg_color: "#F39D70"
            // },
            // {
            //     key: 6,
            //     animal: "platypus",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898858/Animals/Platypus_svg.svg",
            //     color: "#8C6086",
            //     bg_color: "#9FD0FB"
            // },
            // {
            //     key: 7,
            //     animal: "shark",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Shark_svg.svg",
            //     color: "#C7C6C4",
            //     bg_color: "#0B3DAA"
            // },
            // {
            //     key: 8,
            //     animal: "crab",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898858/Animals/SpiderCrab_svg.svg",
            //     color: "#D7766B",
            //     bg_color: "#ECD882"
            // },
            // {
            //     key: 9,
            //     animal: "millipede",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Millipede_svg.svg",
            //     color: "#9793F8",
            //     bg_color: "#F6EBEE"
            // },
            // {
            //     key: 10,
            //     animal: "panda",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898858/Animals/Panda_svg.svg",
            //     color: "#4C3B4A",
            //     bg_color: "#AECEE0"
            // },
            // {
            //     key: 11,
            //     animal: "bat",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Bat_svg.svg",
            //     color: "#92EBDF",
            //     bg_color: "#29356A"
            // },
            // {
            //     key: 12,
            //     animal: "griffin",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Griffin_svg.svg",
            //     color: "#4E170F",
            //     bg_color: "#E1642C"
            // },
            {
                key: 13,
                animal: "sloth",
                image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898858/Animals/Sloth_svg.svg",
                color: "#EDCB7A",
                bg_color: "#487360"
            },
            {
                key: 14,
                animal: "butterfly",
                image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Butterfly_svg.svg",
                color: "#864BFF",
                bg_color: "#9A9DD7"
            },
            {
                key: 15,
                animal: "elephant",
                image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Elephant_svg.svg",
                color: "#083EA7",
                bg_color: "#D6E7E1"
            }
            //,
            // {
            //     key: 16,
            //     animal: "turtle",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898860/Animals/Turtle_svg.svg",
            //     color: "#394F98",
            //     bg_color: "#9DB7A4"
            // },
            // {
            //     key: 17,
            //     animal: "snail",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898859/Animals/Snail_svg.svg",
            //     color: "#3A275E",
            //     bg_color: "#F39D70"
            // },
            // {
            //     key: 18,
            //     animal: "platypus",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898858/Animals/Platypus_svg.svg",
            //     color: "#8C6086",
            //     bg_color: "#9FD0FB"
            // },
            // {
            //     key: 19,
            //     animal: "shark",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Shark_svg.svg",
            //     color: "#C7C6C4",
            //     bg_color: "#0B3DAA"
            // },
            // {
            //     key: 20,
            //     animal: "crab",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898858/Animals/SpiderCrab_svg.svg",
            //     color: "#D7766B",
            //     bg_color: "#ECD882"
            // },
            // {
            //     key: 21,
            //     animal: "millipede",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Millipede_svg.svg",
            //     color: "#9793F8",
            //     bg_color: "#F6EBEE"
            // },
            // {
            //     key: 22,
            //     animal: "panda",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898858/Animals/Panda_svg.svg",
            //     color: "#4C3B4A",
            //     bg_color: "#AECEE0"
            // },
            // {
            //     key: 23,
            //     animal: "bat",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Bat_svg.svg",
            //     color: "#92EBDF",
            //     bg_color: "#29356A"
            // },
            // {
            //     key: 24,
            //     animal: "griffin",
            //     image: "https://res.cloudinary.com/lwcqviihu/image/upload/v1512898855/Animals/Griffin_svg.svg",
            //     color: "#4E170F",
            //     bg_color: "#E1642C"
            // }
        ];
        this.animalMix = this.shuffle(this.animals);
        this.flipped = [];
        this.pairsFound = 0;
        this.state = {
            animalMix: this.animalMix,
            doTurn: true,
            goes: 0,
            route: ""
        }
    }

    shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    createCard(item) {
        var gridSpace;
        if (item.animal) {
            gridSpace =
                <Card index={item.key} animal={item.animal} image={item.image} color={item.color} bg_color={item.bg_color} doTurn={this.state.doTurn} clickHandle={this.cardClick} />
        } else {
            gridSpace = "";
        }
        return (
            <div key={item.key} className="grid-space">
                {gridSpace}
            </div>
        );
    }

    cardClick(card) {
        this.flipped.push(card);
        if (this.flipped.length > 1) {
            this.setState({
                doTurn: false
            });
            this.checkCards();
        }
    }

    checkCards() {
        if (this.flipped[0].props.animal === this.flipped[1].props.animal) {
            window.setTimeout(this.removePair, 2000);
        } else {
            window.setTimeout(this.turnCards, 2000);
        };
        let goes = this.state.goes + 1;
        this.setState({
            goes: goes
        });
    }

    turnCards() {
        this.flipped.forEach(function (item) {
            item.turnBack();
        });
        this.flipped = [];
        this.setState({
            doTurn: true
        });
    }

    //removes pair if match is found
    removePair() {
        let animalsHeld = [...this.state.animalMix];
        let theMatch = this.flipped[0].props.animal;

        let newAnimalsHeld = animalsHeld.map(function(animal) {
            if (animal.animal === theMatch) {
                return {key: animal.key};
            } else {
                return animal;
            }
        });
        this.pairsFound += 1;
        this.setState({
            animalMix: newAnimalsHeld,
            doTurn: true
        });
        this.flipped = []; 
        if (this.pairsFound === this.animals.length / 2) {
            this.gameOver();
        }  
    }

    //Passes goes taken up to App, and routes to gameover or winner
    gameOver() {
        this.props.logGameGoes(this.state.goes);
        if(this.props.leaders.length > 4 && this.state.goes >= this.props.leaders[this.props.leaders.length - 1].goes) {
            this.setState({
                route: "/gameover"
            });
        }else{
            this.setState({
                route: "/winner"
            });
        }
        console.log(this.state.route);
    }

    render() {
        if(this.state.route){
            return <Redirect push to={this.state.route} />;
        }
        return (
            <div className="game-container">
                <div className="score-bar">
                    <p className="score"><span className="tan"> Goes: </span><span className="blue">{this.state.goes}</span></p>
                </div>
                <div className="board">
                    {this.state.animalMix.map(this.createCard)}
                    {/* {this.state.over && <Gameover />} */}
                </div>
            </div>
        );
    }
};
export default Board;
