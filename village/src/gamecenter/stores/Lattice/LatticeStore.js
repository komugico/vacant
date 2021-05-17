/* ========================================================================== */
/* React-Redux                                                                */
/* ========================================================================== */
import { createStore } from "redux";

function reducer(state = [], action) {
    switch (action.type) {
        case 'DUMMY':
            return state;  
        default:
            return state;
    }
}
  
export default createStore(reducer);