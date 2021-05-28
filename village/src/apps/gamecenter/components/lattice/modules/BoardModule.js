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

        window.addEventListener('resize', () => this.handleUpdateBoardSize());
    }

    componentDidMount() {
        this.handleUpdateBoardSize();
    }

    handleUpdateBoardSize() {
        let boardSize = Math.floor(document.getElementById('board-parent').clientWidth * 0.8);
        this.props.act_update_board_size(boardSize);
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
                width: Math.floor(this.props.boardSize / this.props.numLattice) + 'px',
                height: Math.floor(this.props.boardSize / this.props.numLattice) + 'px',
                border: 'none',
                textAlign: 'center',
            }
        };
    }

    stylesDummyCells() {
        return {
            table: {
                position: 'absolute',
                left: Math.floor(this.props.boardSize / this.props.numLattice) / 2 + 'px',
                top: Math.floor(this.props.boardSize / this.props.numLattice) / 2 + 'px',
            },
            td: {
                width: Math.floor(this.props.boardSize / this.props.numLattice) + 'px',
                height: Math.floor(this.props.boardSize / this.props.numLattice) + 'px',
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
                width: Math.floor(this.props.boardSize / this.props.numLattice) + 'px',
                height: Math.floor(this.props.boardSize / this.props.numLattice) + 'px',
                border: 'none',
                textAlign: 'center',
            }
        };
    }

    stylesCells() {
        return {
            table: {
                position: 'absolute',
                left: Math.floor(this.props.boardSize / this.props.numLattice) / 2 + 'px',
                top: Math.floor(this.props.boardSize / this.props.numLattice) / 2 + 'px',
            },
            td: {
                width: Math.floor(this.props.boardSize / this.props.numLattice) + 'px',
                height: Math.floor(this.props.boardSize / this.props.numLattice) + 'px',
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
                    size={0}
                />
                <BoardBlock
                    stones={this.stonesDummy(this.props.cells.length)}
                    styles={this.stylesDummyCells()}
                    isGrabbed={Math.abs(this.props.grabbedStone) === C.STONE_CELL}
                    px={this.state.px}
                    py={this.state.py}
                    size={0}
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
                        size={Math.floor(this.props.boardSize / this.props.numLattice * 0.3)}
                    />
                    <BoardBlock
                        stones={this.props.cells}
                        styles={this.stylesCells()}
                        updatePxPy={(x, y) => this.updatePxPy(x, y)}
                        act_put_stone={(x, y) => this.props.act_put_stone(x, y)}
                        size={Math.floor(this.props.boardSize / this.props.numLattice * 0.7)}
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
                        size={Math.floor(this.props.boardSize / this.props.numLattice * 0.7)}
                    />
                    <BoardBlock
                        stones={this.props.lattices}
                        styles={this.stylesLattices()}
                        updatePxPy={(x, y) => this.updatePxPy(x, y)}
                        act_put_stone={(x, y) => this.props.act_put_stone(x, y)}
                        size={Math.floor(this.props.boardSize / this.props.numLattice * 0.3)}
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
                        size={Math.floor(this.props.boardSize / this.props.numLattice * 0.3)}
                    />
                    <BoardBlock
                        stones={this.props.cells}
                        styles={this.stylesCells()}
                        size={Math.floor(this.props.boardSize / this.props.numLattice * 0.7)}
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
                    <div id='board-parent' style={{ position: 'relative', paddingTop: '80%', left: Math.floor(this.props.boardSize / 8) + 'px' }}>
                        { this.boardBlocksDummy() }
                        { this.boardBlocksStones() }
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default BoardModule;