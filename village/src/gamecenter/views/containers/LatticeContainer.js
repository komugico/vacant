/* ========================================================================== */
/* React-Redux                                                                */
/* ========================================================================== */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ========================================================================== */
/* React-Bootstrap                                                            */
/* ========================================================================== */
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

/* ========================================================================== */
/* Game Center Comtents                                                       */
/* ========================================================================== */


class LatticeContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Village > Game Center > Lattice</Navbar.Brand>
                </Navbar>
                <br />
                <Container fluid>
                    <Row>
                        <Col>
                            Welcome
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(LatticeContainer);