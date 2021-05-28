/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './actions';
import * as logics from './logics';
import * as C from './constants';

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const reducer = (state = logics.createInitState(), action) => {
    switch (action.type) {
        case actions.INIT_STATE:
            return logics.createInitState();
        case actions.PUT_STONE:
            if (Math.abs(state.grabbedStone) == C.STONE_LATTICE) {
                if (state.lattices[action.y][action.x] == C.STONE_EMPTY) {
                    let cpy_lattices = logics.copyArray(state.lattices);
                    if (state.grabbedStone >= C.STONE_PLAYER1) {
                        cpy_lattices[action.y][action.x] = C.STONE_PLAYER1;
                    }
                    else {
                        cpy_lattices[action.y][action.x] = C.STONE_PLAYER2;
                    }

                    return {
                        ...state,
                        lattices: cpy_lattices,
                    }
                }
            }
            else if (Math.abs(state.grabbedStone) == C.STONE_CELL) {
                if (state.cells[action.y][action.x] == C.STONE_EMPTY) {
                    let cpy_cells = logics.copyArray(state.cells);
                    if (state.grabbedStone >= C.STONE_PLAYER1) {
                        cpy_cells[action.y][action.x] = C.STONE_PLAYER1;
                    }
                    else {
                        cpy_cells[action.y][action.x] = C.STONE_PLAYER2;
                    }
                    
                    return {
                        ...state,
                        cells: cpy_cells,
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