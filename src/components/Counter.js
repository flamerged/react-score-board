import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, changeScore, score, handleHighestScore }) => {
    return (
        <div className="counter">
            <button
                className="counter-action decrement"
                onClick={() => {
                    if (score > 0) {
                        changeScore(index, -1);
                        handleHighestScore();
                    }
                }}
            >
                {' '}
                -{' '}
            </button>
            <span className="counter-score">{score}</span>
            <button
                className="counter-action increment"
                onClick={() => {
                    changeScore(index, 1);
                    handleHighestScore();
                }}
            >
                {' '}
                +{' '}
            </button>
        </div>
    );
};

Counter.propTypes = {
    index: PropTypes.number,
    changeScore: PropTypes.func,
    score: PropTypes.number
};

Counter.defaultProps = {
    score: 0
};

export default Counter;
