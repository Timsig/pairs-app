import React from 'react';
import Button from './Button';
import ButtonNonav from './ButtonNonav';
import { Redirect } from 'react-router-dom';


class Winner extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            value: '',
            redirect: false,
            warn: false
        };
    }

    handleChange(event) {
        this.setState({ 
            value: event.target.value,
            warn: false 
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.value === "") {
            this.setState({
                warn: true
            });
            return;
        }
        this.props.addLeader(this.state.value);
        this.setState({
            redirect: true
        });
    }
    
    render() {
        if (this.state.redirect){
            return <Redirect push to="/leaderboard" />;
        }
        const warn = this.state.warn ? "Please enter a name" : "";
        return(
            <div className="modal enter-winner">
                <h2>W<span className="rouge">i</span>nner<span className="rouge">!</span></h2>
                <p>Enter your name for the Hall of fame.</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Your name:
                        <input autoFocus type="text" onChange={this.handleChange} placeholder={warn} />
                    </label>
                    <input type="submit" className="hidden" />
                    <div className="button-holder">
                        <Button text="Skip this" class="secondary" to="/"/>
                        <ButtonNonav type="submit" text="Enter" class="primary" />
                    </div>
                </form>
                <img className="moneybot" src="https://res.cloudinary.com/lwcqviihu/image/upload/v1516314124/Animals/Moneybot_rouge.svg"/>
            </div>
        );
    }
}

export default Winner;