import React, { Component } from 'react';

class AddPlayerForm extends Component {
    playerInput = React.createRef();

    handleSubmit = event => {
        const { addPlayer } = this.props;
        event.preventDefault();
        addPlayer(this.playerInput.current.value);
        event.currentTarget.reset();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
                    placeholder="Enter a Player's name"
                />
                <input type="submit" value="Add Player" />
            </form>
        );
    }
}

export default AddPlayerForm;
