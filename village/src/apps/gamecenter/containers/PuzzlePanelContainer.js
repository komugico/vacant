import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

import * as actions from '../stores/puzzlepanel/action';
import ProblemModule from '../components/puzzlepanel/modules/ProblemModule';
import AnswerModule from '../components/puzzlepanel/modules/AnswerModule';
import OperationModule from '../components/puzzlepanel/modules/OperationModule';

class PuzzlePanelContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.act_init();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.cntFlip !== this.props.cntFlip) {
            this.props.act_judge();
        }
    }

    render() {
        return (
            <div>
                <HeaderModule />
                <br />
                <Container fluid>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <OperationModule
                                act_problem_random={this.props.act_problem_random}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <ProblemModule
                                panels={this.props.problemPanels}
                            />
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <AnswerModule
                                panels={this.props.answerPanels}
                                act_flip_answer_panels={this.props.act_flip_answer_panels}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(PuzzlePanelContainer);