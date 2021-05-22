import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
                    <Row>
                        <Col>
                            <Button onClick={() => this.props.act_create_problem_random()}>問題生成</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => alert("未実装")}>解答リセット</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default OperationModule;