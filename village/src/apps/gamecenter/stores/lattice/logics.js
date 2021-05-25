import * as C from './constants';

export const createInitState = () => {
    return {
        lattices: createEmptyStones(C.NUM_LATTICE),
        cells: createEmptyStones(C.NUM_LATTICE - 1),
        player1: {
            bigStones: calcInitBigStones(),
            smallStones: calcInitSmallStones(),
            score: 0,
        },
        player2: {
            bigStones: calcInitBigStones(),
            smallStones: calcInitSmallStones(),
            score: 0,
        },
        cntTurn: 0,
        nextPlayer: C.PLAYER1,
        grabbedStone: C.STONE_EMPTY,
    }
};

export const createEmptyStones = (len) => {
    let stones = [];
    for (let i = 0; i < len; i++) {
        stones.push([]);
        for (let j = 0; j < len; j++) {
            stones[i].push(C.STONE_EMPTY);
        }
    }
    return stones;
}

const calcInitBigStones = () => {
    return Math.floor((C.NUM_LATTICE - 2) * (C.NUM_LATTICE - 2) / 2);
}

const calcInitSmallStones = () => {
    return Math.floor(C.NUM_LATTICE * (C.NUM_LATTICE - 1) / 2);
}