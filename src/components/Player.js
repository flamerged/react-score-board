import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
    render() {
        const {
            removePlayer,
            playerName,
            score,
            changeScore,
            index,
            id
        } = this.props;
        return (
            <div className="player">
                <span className="player-name">
                    <button
                        className="remove-player"
                        onClick={() => removePlayer(id)}
                    >
                        ✖
                    </button>
                    {playerName}
                </span>
                <Counter
                    score={score}
                    changeScore={changeScore}
                    index={index}
                />
            </div>
        );
    }
}

export default Player;
