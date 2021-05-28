import React from 'react';
import { Card, Button } from 'react-bootstrap';

class OperationModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <b>{this.props.name}</b>
                    <i>{this.props.isMyTurn && " It's your turn."}</i>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Score</Card.Title>
                    {this.props.score} Victory Points
                    <hr />
                    <Card.Title>Operations</Card.Title>
                    <Button
                        variant="outline-danger"
                        disabled={!this.props.isMyTurn}
                    >Surrender</Button>
                    <hr />
                    <Card.Title>Stones</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default OperationModule;