import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

import * as actions from '../stores/lattice/actions';
import * as C from '../stores/lattice/constants';
import BoardModule from '../components/lattice/modules/BoardModule';
import OperationModule from '../components/lattice/modules/OperationModule';
import UserModule from '../components/lattice/modules/UserModule';

class LatticeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    componentWillUnmount() {

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
                                act_init_state={this.props.act_init_state}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                            <UserModule
                                name={"PLAYER 1"}
                                score={this.props.player1.score}
                                isMyTurn={this.props.nextPlayer === C.PLAYER1}
                            />
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <BoardModule
                                lattices={this.props.lattices}
                                cells={this.props.cells}
                                grabbedStone={this.props.grabbedStone}
                                act_put_stone={this.props.act_put_stone}
                            />
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                            <UserModule
                                name={"PLAYER 2"}
                                score={this.props.player2.score}
                                isMyTurn={this.props.nextPlayer === C.PLAYER2}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(LatticeContainer);