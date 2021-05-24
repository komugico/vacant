/* ========================================================================== */
/* Action Types                                                               */
/* ========================================================================== */
export const INIT_STATE = "@gamecenter/puzzlepanel/init_state";
export const CREATE_PROBLEM_RANDOM = "@gamecenter/puzzlepanel/create_prob_random";
export const FLIP_ANSWER_PANELS = "@gamecenter/puzzlepanel/flip_answer_panels";
export const JUDGE_ANSWER = "@gamecenter/puzzlepanel/judge_answer";
export const RESET_ANSWER = "@gamecenter/puzzlepanel/reset_answer";
export const TICK = "@gamecenter/puzzlepanel/tick";

/* ========================================================================== */
/* Actions                                                                    */
/* ========================================================================== */
export const act_init_state = () => ({
    type: INIT_STATE,
});

export const act_create_problem_random = () => ({
    type: CREATE_PROBLEM_RANDOM,
});

export const act_flip_answer_panels = (x, y) => ({
    type: FLIP_ANSWER_PANELS,
    x: x,
    y: y,
});

export const act_judge_answer = () => ({
    type: JUDGE_ANSWER,
});

export const act_reset_answer = () => ({
    type: RESET_ANSWER,
});

export const act_tick = () => ({
    type: TICK,
});