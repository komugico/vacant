/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './action';
import * as logics from './logics';
import * as C from './constant';

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const reducer = (state = logics.createInitState(), action) => {
    switch (action.type) {
        case actions.INIT:
            return logics.createInitState();
        case actions.PROBLEM_RANDOM:
            let problemPanels = logics.createProblemRandom(state.numPanel);
            let answerPanels = [];
            
            for (let i = 0; i < state.numPanel; i++) {
                answerPanels.push([]);
                for (let j = 0; j < state.numPanel; j++) {
                    answerPanels[i].push(C.PANEL_FRONT);
                }
            }

            return {
                ...state,
                problemPanels: problemPanels,
                answerPanels: answerPanels,
            }
        case actions.FLIP_ANSWER_PANELS:
            let cpy_answerPanels = JSON.parse(JSON.stringify(state.answerPanels));
            let flipped_answerPanels = logics.flipPanels(cpy_answerPanels, action.x, action.y, state.numPanel);
            let cntFlip = state.cntFlip + 1;
            return {
                ...state,
                answerPanels: flipped_answerPanels,
                cntFlip: cntFlip,
            }
        case actions.JUDGE:
            if (logics.judge(state.problemPanels, state.answerPanels, state.numPanel)) {
                setTimeout(() => alert("CLEAR"), 1);
            }
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default reducer;