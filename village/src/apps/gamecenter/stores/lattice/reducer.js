/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './actions';
import * as logics from './logics';
import * as C from './constants';
import LatticeCPU from './cpu';

const cpu = new LatticeCPU();

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const reducer = (state = logics.createInitState(), action) => {
    switch (action.type) {
        case actions.INIT_STATE:
            return {
                ...logics.createInitState(),
                boardSize: state.boardSize,
            }
        case actions.GRAB_STONE:
            return {
                ...state,
                grabbedStone: action.stone,
            }
        case actions.PUT_STONE:
            if (Math.abs(state.grabbedStone) === C.STONE_LATTICE) {
                if (state.lattices[action.y][action.x] === C.STONE_EMPTY) {
                    let cpy_lattices = logics.copyArray(state.lattices);
                    if (state.grabbedStone >= C.STONE_PLAYER1) {
                        cpy_lattices[action.y][action.x] = C.STONE_PLAYER1;

                        return {
                            ...state,
                            lattices: cpy_lattices,
                            player1: {
                                smallStones: state.player1.smallStones - 1,
                                bigStones: state.player1.bigStones,
                                score: state.player1.score,
                            },
                            cntTurn: state.cntTurn + 1,
                            nextPlayer: C.PLAYER2,
                            grabbedStone: C.STONE_EMPTY,
                        }
                    }
                    else {
                        cpy_lattices[action.y][action.x] = C.STONE_PLAYER2;

                        return {
                            ...state,
                            lattices: cpy_lattices,
                            player2: {
                                smallStones: state.player2.smallStones - 1,
                                bigStones: state.player2.bigStones,
                                score: state.player2.score,
                            },
                            cntTurn: state.cntTurn + 1,
                            nextPlayer: C.PLAYER1,
                            grabbedStone: C.STONE_EMPTY,
                        }
                    }
                }
            }
            else if (Math.abs(state.grabbedStone) === C.STONE_CELL) {
                if (state.cells[action.y][action.x] === C.STONE_EMPTY) {
                    let cpy_cells = logics.copyArray(state.cells);
                    if (state.grabbedStone >= C.STONE_PLAYER1) {
                        cpy_cells[action.y][action.x] = C.STONE_PLAYER1;

                        return {
                            ...state,
                            cells: cpy_cells,
                            player1: {
                                smallStones: state.player1.smallStones,
                                bigStones: state.player1.bigStones - 1,
                                score: state.player1.score,
                            },
                            cntTurn: state.cntTurn + 1,
                            nextPlayer: C.PLAYER2,
                            grabbedStone: C.STONE_EMPTY,
                        }
                    }
                    else {
                        cpy_cells[action.y][action.x] = C.STONE_PLAYER2;

                        return {
                            ...state,
                            cells: cpy_cells,
                            player2: {
                                smallStones: state.player2.smallStones,
                                bigStones: state.player2.bigStones - 1,
                                score: state.player2.score,
                            },
                            cntTurn: state.cntTurn + 1,
                            nextPlayer: C.PLAYER1,
                            grabbedStone: C.STONE_EMPTY,
                        }
                    }
                }
            }
            
            return {
                ...state,
            }
        case actions.UPDATE_SCORE:
            return {
                ...state,
                player1: {
                    smallStones: state.player1.smallStones,
                    bigStones: state.player1.bigStones,
                    score: logics.calcScore(state.lattices, state.cells, C.PLAYER1),
                },
                player2: {
                    smallStones: state.player2.smallStones,
                    bigStones: state.player2.bigStones,
                    score: logics.calcScore(state.lattices, state.cells, C.PLAYER2),
                }
            }
        case actions.UPDATE_BOARD_SIZE:
            return {
                ...state,
                boardSize: action.boardSize,
            }
        case actions.THINK_CPU:
            let prediction = cpu.think(
                state.lattices,
                state.cells,
                state.player1.smallStones,
                state.player1.bigStones,
                state.player2.smallStones,
                state.player2.bigStones,
                3
            );
            console.dir(prediction);
            if (prediction) {
                if (Math.abs(prediction.stone) === C.STONE_LATTICE) {
                    let cpy_lattices = logics.copyArray(state.lattices);
                    cpy_lattices[prediction.py][prediction.px] = C.STONE_PLAYER2;
    
                    return {
                        ...state,
                        lattices: cpy_lattices,
                        player2: {
                            smallStones: state.player2.smallStones - 1,
                            bigStones: state.player2.bigStones,
                            score: state.player2.score,
                        },
                        cntTurn: state.cntTurn + 1,
                        nextPlayer: C.PLAYER1,
                        grabbedStone: C.STONE_EMPTY,
                    }
                }
                else {
                    let cpy_cells = logics.copyArray(state.cells);
                    cpy_cells[prediction.py][prediction.px] = C.STONE_PLAYER2;
    
                    return {
                        ...state,
                        cells: cpy_cells,
                        player2: {
                            smallStones: state.player2.smallStones,
                            bigStones: state.player2.bigStones - 1,
                            score: state.player2.score,
                        },
                        cntTurn: state.cntTurn + 1,
                        nextPlayer: C.PLAYER1,
                        grabbedStone: C.STONE_EMPTY,
                    }
                }
            }
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer;