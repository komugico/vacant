/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './action';

/* ========================================================================== */
/* State                                                                      */
/* ========================================================================== */
const initialState = {
    message: "welcome",
};

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.WELCOME:
            alert(action.message);
            return state;
        default:
            return state;
    }
}

export default reducer;