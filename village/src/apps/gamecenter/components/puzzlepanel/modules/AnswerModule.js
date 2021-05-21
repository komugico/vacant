import React from 'react';
import { Card } from 'react-bootstrap';

import BoardBlock from '../blocks/BoardBlock';

class AnswerModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <b>Answer</b>
                </Card.Header>
                <Card.Body>
                    <BoardBlock
                        panels={this.props.panels}
                    />
                </Card.Body>
            </Card>
        );
    }
}

export default AnswerModule;