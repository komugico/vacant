import * as C from './constants';

export const createInitState = () => {
    return {
        numLattice: C.NUM_LATTICE,
        lattices: createEmptyStones(C.NUM_LATTICE),
        cells: createEmptyStones(C.NUM_LATTICE - 1),
        player1: {
            smallStones: calcInitSmallStones(),
            bigStones: calcInitBigStones(),
            score: 0,
        },
        player2: {
            smallStones: calcInitSmallStones(),
            bigStones: calcInitBigStones(),
            score: 0,
        },
        cntTurn: 0,
        nextPlayer: C.PLAYER1,
        grabbedStone: C.STONE_EMPTY,
        boardSize: 50,
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

const calcInitSmallStones = () => {
    return Math.floor(C.NUM_LATTICE * (C.NUM_LATTICE - 1) / 2);
}

const calcInitBigStones = () => {
    return Math.floor((C.NUM_LATTICE - 2) * (C.NUM_LATTICE - 2) / 2);
}

export const copyArray = (array) => {
    return JSON.parse(JSON.stringify(array));
}