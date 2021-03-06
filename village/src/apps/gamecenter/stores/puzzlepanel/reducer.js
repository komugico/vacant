/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './actions';
import * as logics from './logics';

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const reducer = (state = logics.createInitState(), action) => {
    switch (action.type) {
        case actions.INIT_STATE:
            return logics.createInitState();
        case actions.CREATE_PROBLEM_RANDOM:
            return {
                ...state,
                problemPanels: logics.createProblemRandom(state.numPanel),
                answerPanels: logics.initPanel(state.numPanel),
            }
        case actions.FLIP_ANSWER_PANELS:
            let cpy_answerPanels = JSON.parse(JSON.stringify(state.answerPanels));
            let cntFlip = state.cntFlip + 1;
            return {
                ...state,
                answerPanels: logics.flipPanels(cpy_answerPanels, action.x, action.y, state.numPanel),
                cntFlip: state.cntFlip + 1,
            }
        case actions.JUDGE_ANSWER:
            if (logics.judge(state.problemPanels, state.answerPanels, state.numPanel)) {
                setTimeout(() => alert("CLEAR"), 1);
            }
            return {
                ...state,
            }
        case actions.RESET_ANSER:
            return {
                ...state,
                answerPanels: logics.initPanel(state.numPanel),
                cntFlip: 0,
            }
        default:
            return state;
    }
}

export default reducer;