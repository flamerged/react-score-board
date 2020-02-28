import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

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
        ]
    };

    handleScoreChange = (index, delta) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += delta
        }));
    };

    handleRemovePlayer = id => {
        this.setState(prevState => ({
            players: prevState.players.filter(player => player.id !== id)
        }));
    };

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={this.state.players.length}
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
                    />
                ))}
            </div>
        );
    }
}

export default App;
