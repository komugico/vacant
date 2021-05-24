import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import TimeBlock from '../blocks/TimeBlock';

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
                    <Row>
                        <Col>
                            <Button onClick={() => this.props.act_create_problem_random()}>問題生成</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => this.props.act_reset_answer()}>解答リセット</Button>
                        </Col>
                        <Col>
                            <TimeBlock
                                seconds={this.props.seconds}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default OperationModule;