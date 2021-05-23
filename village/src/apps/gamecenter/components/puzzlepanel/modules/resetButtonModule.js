import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';

class ResetButtonModule extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
    }

    handleUpdateBoardSize() {
    }

    render() {
        return (
            <Button onClick={() => this.handleClick()}>リセット</Button>
        )
    }
}

export default ResetButton