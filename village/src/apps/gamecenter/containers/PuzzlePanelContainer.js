import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

import * as actions from '../stores/puzzlepanel/action';
import ProblemModule from '../components/puzzlepanel/modules/ProblemModule';
import AnswerModule from '../components/puzzlepanel/modules/AnswerModule';

class PuzzlePanelContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.act_init();
    }

    render() {
        return (
            <div>
                <HeaderModule />
                <br />
                <Container fluid>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <ProblemModule
                                panels={this.props.problemPanels}
                            />
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <AnswerModule
                                panels={this.props.answerPanels}
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