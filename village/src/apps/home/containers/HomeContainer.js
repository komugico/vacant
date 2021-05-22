import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

import * as actions from '../stores/home/actions';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <HeaderModule />
                <br />
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                            <h1>Welcome to My Home</h1>
                            <Button onClick={this.props.act_welcome} size="lg" block>Click Me</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(HomeContainer);