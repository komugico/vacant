import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

import * as actions from '../stores/puzzlepanel/actions';
import ProblemModule from '../components/puzzlepanel/modules/ProblemModule';
import AnswerModule from '../components/puzzlepanel/modules/AnswerModule';
import OperationModule from '../components/puzzlepanel/modules/OperationModule';

class PuzzlePanelContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.act_init_state();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.cntFlip !== this.props.cntFlip) {
            this.props.act_judge_answer();
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
                                act_create_problem_random={this.props.act_create_problem_random}
                                act_reset_answer={this.props.act_reset_answer}
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