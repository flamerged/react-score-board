import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './StopWatch';

const Header = ({ players, title }) => {
    return (
        <header>
            <Stats players={players} />
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
};

Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
}

Header.defaultProps = {
    title: "Empty title",
    players: "Could not read player"
}

export default Header;
