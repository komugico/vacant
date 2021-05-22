import * as C from './constants';

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
        cntFlip: 0,
        problemPanels: problemPanels,
        answerPanels: answerPanels,
    };

    return initState;
};

export const createProblemRandom = (numPanel) => {
    let problemPanels = [];
    for (let i = 0; i < numPanel; i++) {
        problemPanels.push([]);
        for (let j = 0; j < numPanel; j++) {
            problemPanels[i].push(C.PANEL_FRONT);
        }
    }

    let cntFlips = Math.floor(Math.random() * 11) + 3;
    for (let i = 0; i < cntFlips; i++) {
        let c_x = Math.floor(Math.random() * (numPanel + 1));
        let c_y = Math.floor(Math.random() * (numPanel + 1));
        problemPanels = flipPanels(problemPanels, c_x, c_y, numPanel);
    }

    return problemPanels;
};

export const flipPanels = (panels, c_x, c_y, numPanel) => {
    panels = flipPanel(panels, c_x - 1, c_y - 1, numPanel);
    panels = flipPanel(panels, c_x - 1, c_y,     numPanel);
    panels = flipPanel(panels, c_x - 1, c_y + 1, numPanel);
    panels = flipPanel(panels, c_x,     c_y - 1, numPanel);
    panels = flipPanel(panels, c_x,     c_y,     numPanel);
    panels = flipPanel(panels, c_x,     c_y + 1, numPanel);
    panels = flipPanel(panels, c_x + 1, c_y - 1, numPanel);
    panels = flipPanel(panels, c_x + 1, c_y,     numPanel);
    panels = flipPanel(panels, c_x + 1, c_y + 1, numPanel);

    return panels;
}

const flipPanel = (panels, x, y, numPanel) => {
    if (x >= 0 && x < numPanel && y >= 0 && y < numPanel) {
        if (panels[y][x] === C.PANEL_FRONT) {
            panels[y][x] = C.PANEL_BACK;
        }
        else {
            panels[y][x] = C.PANEL_FRONT;
        }
    }

    return panels;
}

export const judge = (problemPanels, answerPanels, numPanel) => {
    for (let y = 0; y < numPanel; y++) {
        for (let x = 0; x < numPanel; x++) {
            if (problemPanels[y][x] !== answerPanels[y][x]) {
                return false;
            }
        }
    }
    return true;
};