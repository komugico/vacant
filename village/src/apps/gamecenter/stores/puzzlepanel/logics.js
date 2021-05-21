import * as C from './constant';

export const createInitState = () => {
    let problemPanels = [];
    let answerPanels = [];

    for (let i = 0; i < C.NUM_PANEL_INIT; i++) {
        problemPanels.push([]);
        answerPanels.push([]);
        for (let j = 0; j < C.NUM_PANEL_INIT; j++) {
            problemPanels[i].push(C.PANEL_FRONT);
            answerPanels[i].push(C.PANEL_FRONT);
        }
    }

    let initState = {
        numPanel: C.NUM_PANEL_INIT,
        problemPanels: problemPanels,
        answerPanels: answerPanels,
    };

    return initState;
};