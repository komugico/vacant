/* ========================================================================== */
/* Action Types                                                               */
/* ========================================================================== */
export const INIT_STATE = "@gamecenter/lattice/init_state";
export const GRAB_STONE = "@gamecenter/lattice/grab_stone";
export const PUT_STONE = "@gamecenter/lattice/put_stone";
export const UPDATE_BOARD_SIZE = "@gamecenter/lattice/update_board_size";

/* ========================================================================== */
/* Actions                                                                    */
/* ========================================================================== */
export const act_init_state = () => ({
    type: INIT_STATE,
});

export const act_grab_stone = (stone) => ({
    type: GRAB_STONE,
    stone: stone,
});

export const act_put_stone = (x, y) => ({
    type: PUT_STONE,
    x: x,
    y: y,
});

export const act_update_board_size = (boardSize) => ({
    type: UPDATE_BOARD_SIZE,
    boardSize: boardSize,
});