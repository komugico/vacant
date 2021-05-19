import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import HeaderModule from '../../../shared/components/modules/HeaderModule';

import * as actions from '../../../../stores/apps/gamecenter/action';

class PuzzlePanelContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderModule />
                <Container fluid>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            正解はこっち
                            <Button
                                onClick={() => this.props.act_welcome("正解")}
                                size="lg"
                                block
                            >
                                正解
                            </Button>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            操作はこっち
                            <Button
                                onClick={() => this.props.act_welcome("操作")}
                                size="lg"
                                block
                            >
                                正解
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(PuzzlePanelContainer);