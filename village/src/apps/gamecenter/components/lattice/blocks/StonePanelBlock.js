import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import StoneAtom from '../atoms/StoneAtom';
import * as C from '../../../stores/lattice/constants';

class StonePanelBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    stoneAtomsSmall() {
        let stoneAtoms = [];
        for (let i = 0; i < this.props.smallStones; i++) {
            stoneAtoms.push(
                <StoneAtom
                    stone={this.props.player}
                    size={20}
                />
            )
        }
        return stoneAtoms;
    }

    stoneAtomsBig() {
        let stoneAtoms = [];
        for (let i = 0; i < this.props.bigStones; i++) {
            stoneAtoms.push(
                <StoneAtom
                    stone={this.props.player}
                    size={50}
                />
            )
        }
        return stoneAtoms;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                        <Button
                            variant='outline-secondary'
                            size='sm'
                            onClick={() => this.props.act_grab_stone(this.props.player * C.STONE_LATTICE)}
                            block
                        >
                            Grab
                        </Button>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                        {this.stoneAtomsSmall()}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                        <Button
                            variant='outline-secondary'
                            size='sm'
                            onClick={() => this.props.act_grab_stone(this.props.player * C.STONE_CELL)}
                            block
                        >
                            Grab
                        </Button>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                        {this.stoneAtomsBig()}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default StonePanelBlock;