import React from 'react';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import BoardBlock from '../blocks/BoardBlock';

class ProblemModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <b>Problem</b>
                </Card.Header>
                <Card.Body>
                    <Col></Col>
                    <Col>
                    <BoardBlock
                        panels={this.props.panels}
                    />
                    </Col>
                    <Col></Col>
                </Card.Body>
            </Card>
        );
    }
}

export default ProblemModule;