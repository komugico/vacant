/* ========================================================================== */
/* Action Types                                                               */
/* ========================================================================== */
export const INIT = "@gamecenter/puzzlepanel/init";
export const PROBLEM_RANDOM = "@gamecenter/puzzlepanel/prob_random";
export const FLIP_ANSWER_PANELS = "@gamecenter/puzzlepanel/flip_answer_panels";
export const JUDGE = "@gamecenter/puzzlepanel/judge";


/* ========================================================================== */
/* Actions                                                                    */
/* ========================================================================== */
export const act_init = () => ({
    type: INIT,
});

export const act_problem_random = () => ({
    type: PROBLEM_RANDOM,
});

export const act_flip_answer_panels = (x, y) => ({
    type: FLIP_ANSWER_PANELS,
    x: x,
    y: y,
});

export const act_judge = () => ({
    type: JUDGE,
});