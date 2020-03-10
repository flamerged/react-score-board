import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
    state = {
        players: [
            {
                playerName: 'Guil',
                id: 1,
                score: 0
            },
            {
                playerName: 'Treasure',
                id: 2,
                score: 0
            },
            {
                playerName: 'Ashley',
                id: 3,
                score: 0
            },
            {
                playerName: 'James',
                id: 4,
                score: 0
            }
        ],
        highestScore: 0
    };

    handleHighestScore = () => {
        this.setState(prevState => ({
            highestScore: this.state.players.reduce((highScore, player) => {
                return player.score >= highScore ? player.score : highScore;
            }, 0)
        }));
    };

    handleScoreChange = (index, delta) => {
        this.setState(prevState => ({
            score: (prevState.players[index].score += delta)
        }));
    };

    handleRemovePlayer = id => {
        this.setState(prevState => ({
            players: prevState.players.filter(player => player.id !== id)
        }));
    };

    handleAddPlayer = name => {
        this.setState(prevState => ({
            players: [
                ...this.state.players,
                {
                    playerName: name,
                    id: (prevState.players.length += 1),
                    score: 0
                }
            ]
        }));
    };

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    players={this.state.players}
                    highestScore={this.state.highestScore}
                />

                {/* Player list*/}
                {this.state.players.map((player, index) => (
                    <Player
                        playerName={player.playerName}
                        score={player.score}
                        key={player.id.toString()}
                        id={player.id}
                        index={index}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleScoreChange}
                        highestScore={this.state.highestScore}
                        handleHighestScore= {this.handleHighestScore}
                    />
                ))}
                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        );
    }
}

export default App;
