import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
    state = {
        players: [
            {
                playerName: 'Guil',
                id: 1
            },
            {
                playerName: 'Treasure',
                id: 2
            },
            {
                playerName: 'Ashley',
                id: 3
            },
            {
                playerName: 'James',
                id: 4
            }
        ]
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
                {this.state.players.map(player => (
                    <Player
                        playerName={player.playerName}
                        key={player.id.toString()}
                        id={player.id}
                        removePlayer={this.handleRemovePlayer}
                    />
                ))}
            </div>
        );
    }
}

export default App;
