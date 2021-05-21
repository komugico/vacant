/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './action';
import * as logics from './logics';

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const reducer = (state = logics.createInitState(), action) => {
    switch (action.type) {
        case actions.INIT:
            return logics.createInitState();
        default:
            return state;
    }
}

export default reducer;