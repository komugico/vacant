/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './actions';
import * as logics from './logics';
import * as C from './constants';

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const reducer = (state = logics.createInitState(C.NUM_PANEL_INIT), action) => {
    switch (action.type) {
        case actions.INIT_STATE:
            return logics.createInitState(C.NUM_PANEL_INIT);
        case actions.CREATE_PROBLEM_RANDOM:
            return {
                ...state,
                problemPanels: logics.createProblemRandom(state.numPanel),
                answerPanels: logics.initPanel(state.numPanel),
                seconds: C.SECONDS_INIT,
            }
        case actions.FLIP_ANSWER_PANELS:
            let cpy_answerPanels = JSON.parse(JSON.stringify(state.answerPanels));
            return {
                ...state,
                answerPanels: logics.flipPanels(cpy_answerPanels, action.x, action.y, state.numPanel),
                cntFlip: state.cntFlip + 1,
            }
        case actions.JUDGE_ANSWER:
            if (logics.judge(state.problemPanels, state.answerPanels, state.numPanel)) {
                setTimeout(() => alert("CLEAR"), 10);
            }
            return {
                ...state,
            }
        case actions.RESET_ANSWER:
            return {
                ...state,
                answerPanels: logics.initPanel(state.numPanel),
                cntFlip: 0,
            }
        case actions.TICK:
            console.log(state.seconds);
            if (state.seconds > 0) {
                return {
                    ...state,
                    seconds: state.seconds - 1,
                }
            }
            else {
                return {
                    ...state,
                }
            }
        default:
            return state;
    }
}

export default reducer;