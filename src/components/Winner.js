import React from 'react';
import Button from './Button';

class Winner extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('handled!' + event.target.value);
    }
    
    render() {
        return(
            <div className="modal enter-winner">
                <h2>W<span className="rouge">i</span>nner<span className="rouge">!</span></h2>
                <p>Enter your name for the Hall of fame.</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Your name:
                        <input type="text"/>
                    </label>
                    <div className="button-holder">
                        <Button text="Skip this" class="secondary" to="/"/>
                        <Button type="submit" text="Enter" class="primary" to="/leaderboard"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Winner;