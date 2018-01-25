import React from 'react';
import Button from './Button';
import ButtonNonav from './ButtonNonav';
import { Redirect } from 'react-router';


class Winner extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            value: '',
            redirect: false
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.addLeader(this.state.value, this.props.gameGoes);
        this.setState({
            redirect: true
        });
    }
    
    render() {
        if (this.state.redirect){
            return <Redirect push to="/leaderboard" />;
        }
        return(
            <div className="modal enter-winner">
                <h2>W<span className="rouge">i</span>nner<span className="rouge">!</span></h2>
                <p>Enter your name for the Hall of fame.</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Your name:
                        <input type="text" onChange={this.handleChange}/>
                    </label>
                    <div className="button-holder">
                        <Button text="Skip this" class="secondary" to="/"/>
                        <ButtonNonav type="submit" text="Enter" class="primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Winner;