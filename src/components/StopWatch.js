import React, { Component } from 'react';

class Stopwatch extends Component {
    state = {
        isRunning: false,
        time: 0,
        prevTime: 0
    };

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillMount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState(prevState => ({
                prevTime: now,
                time: prevState.time + (now - this.state.prevTime)
            }));
        }
    };

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({ prevTime: Date.now() });
        }
    };

    handleReset = () => {
        this.setState({
            time: 0
        });
    };

    render() {
        const seconds = Math.floor(this.state.time / 1000);
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;
