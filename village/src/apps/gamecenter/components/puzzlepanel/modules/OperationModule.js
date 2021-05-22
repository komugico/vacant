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
                    <b>Operation</b>
                </Card.Header>
                <Card.Body>
                    <Button onClick={() => this.props.act_create_problem_random()}>問題生成</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default OperationModule;