import React from 'react';
import { Card } from 'react-bootstrap';

import BoardBlock from '../blocks/BoardBlock';
import * as C from '../../../stores/lattice/constants';

class BoardModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            px: -1,
            py: -1,
        }
    }

    updatePxPy(x, y) {
        this.setState({
            px: x,
            py: y,
        });
    }

    stonesDummy(len) {
        let stones = [];
        for (let i = 0; i < len; i++) {
            stones.push([]);
            for (let j = 0; j < len; j++) {
                stones[i].push(C.STONE_EMPTY);
            }
        }
        return stones;
    }

    stylesDummyLattices() {
        return {
            table: {
                position: 'absolute',
                left: 0,
                top: 0,
            },
            td: {
                width: '60px',
                height: '60px',
                border: 'none',
                textAlign: 'center',
            }
        };
    }

    stylesDummyCells() {
        return {
            table: {
                position: 'absolute',
                left: '30px',
                top: '30px',
            },
            td: {
                width: '60px',
                height: '60px',
                border: 'solid 1px',
                textAlign: 'center',
            }
        };
    }

    stylesLattices() {
        return {
            table: {
                position: 'absolute',
                left: 0,
                top: 0,
            },
            td: {
                width: '60px',
                height: '60px',
                border: 'none',
                textAlign: 'center',
            }
        };
    }

    stylesCells() {
        return {
            table: {
                position: 'absolute',
                left: '30px',
                top: '30px',
            },
            td: {
                width: '60px',
                height: '60px',
                border: 'none',
                textAlign: 'center',
            }
        };
    }

    boardBlocksDummy() {
        return (
            <div>
                <BoardBlock
                    stones={this.stonesDummy(this.props.lattices.length)}
                    styles={this.stylesDummyLattices()}
                    isGrabbed={Math.abs(this.props.grabbedStone) === C.STONE_LATTICE}
                    px={this.state.px}
                    py={this.state.py}
                    size={20}
                />
                <BoardBlock
                    stones={this.stonesDummy(this.props.cells.length)}
                    styles={this.stylesDummyCells()}
                    isGrabbed={Math.abs(this.props.grabbedStone) === C.STONE_CELL}
                    px={this.state.px}
                    py={this.state.py}
                    size={20}
                />
            </div>
        );
    }

    boardBlocksStones() {
        if (Math.abs(this.props.grabbedStone) === C.STONE_CELL) {
            return (
                <div>
                    <BoardBlock
                        stones={this.props.lattices}
                        styles={this.stylesLattices()}
                        size={20}
                    />
                    <BoardBlock
                        stones={this.props.cells}
                        styles={this.stylesCells()}
                        updatePxPy={(x, y) => this.updatePxPy(x, y)}
                        act_put_stone={(x, y) => this.props.act_put_stone(x, y)}
                        size={50}
                    />
                </div>
            );
        }
        else if (Math.abs(this.props.grabbedStone) === C.STONE_LATTICE) {
            return (
                <div>
                    <BoardBlock
                        stones={this.props.cells}
                        styles={this.stylesCells()}
                        size={50}
                    />
                    <BoardBlock
                        stones={this.props.lattices}
                        styles={this.stylesLattices()}
                        updatePxPy={(x, y) => this.updatePxPy(x, y)}
                        act_put_stone={(x, y) => this.props.act_put_stone(x, y)}
                        size={20}
                    />
                </div>
            );
        }
        else {
            return (
                <div>
                    <BoardBlock
                        stones={this.props.lattices}
                        styles={this.stylesLattices()}
                        size={20}
                    />
                    <BoardBlock
                        stones={this.props.cells}
                        styles={this.stylesCells()}
                        size={50}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <b>Lattice Board</b>
                </Card.Header>
                <Card.Body>
                    <div style={{ position: 'relative', paddingTop: '100%' }}>
                        { this.boardBlocksDummy() }
                        { this.boardBlocksStones() }
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default BoardModule;