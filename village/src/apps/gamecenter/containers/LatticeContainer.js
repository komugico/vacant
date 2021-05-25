import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

import * as actions from '../stores/lattice/actions';

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
                            aaa
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            aaa
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            aaa
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(LatticeContainer);