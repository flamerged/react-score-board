import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown';

class Player extends PureComponent {
    static propTypes = {
        removePlayer: PropTypes.func,
        playerName: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        changeScore: PropTypes.func,
        index: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    };

    static defaultProps = {
        playerName: 'NoName',
        score: 0
    };

    render() {
        const {
            removePlayer,
            playerName,
            score,
            changeScore,
            index,
            highestScore,
            handleHighestScore,
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
                    <Crown highestScore={highestScore <= score} />
                    {playerName}
                </span>
                <Counter
                    score={score}
                    changeScore={changeScore}
                    index={index}
                    handleHighestScore ={handleHighestScore}
                />
            </div>
        );
    }
}

export default Player;
