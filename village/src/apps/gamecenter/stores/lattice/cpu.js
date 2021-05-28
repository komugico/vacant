import * as logics from './logics';
import * as actions from './actions';
import * as C from './constants';

class LatticeCPU {
    constructor() {
        
    }

    think(lattices, cells, player_numSmall, player_numBig, cpu_numSmall, cpu_numBig, depth) {
        return this.minMax(lattices, cells, player_numSmall, player_numBig, cpu_numSmall, cpu_numBig, depth, depth, true, []);
    }

    minMax(lattices, cells, player_numSmall, player_numBig, cpu_numSmall, cpu_numBig, depth, depthMax, isCpuTurn, predictions) {
        let score = 0;
        let stone = 0;
        let px = -1;
        let py = -1;
        if (isCpuTurn) {
            score = -9999;
        }
        else {
            score = 9999;
        }

        if (depth == 0) {
            return logics.calcScore(lattices, cells, C.PLAYER2) - logics.calcScore(lattices, cells, C.PLAYER1);
        }

        if (isCpuTurn) {
            if (cpu_numSmall + cpu_numSmall === 0) {
                return logics.calcScore(lattices, cells, C.PLAYER2) - logics.calcScore(lattices, cells, C.PLAYER1);
            }
            if (cpu_numSmall > 0) {
                for (let y = 0; y < lattices.length; y++) {
                    for (let x = 0; x < lattices.length; x++) {
                        if (logics.canPut(lattices, x, y)) {
                            this.putStone(lattices, y, x, C.STONE_PLAYER2);
                            let tmp_score = this.minMax(
                                lattices,
                                cells,
                                player_numSmall,
                                player_numBig,
                                cpu_numSmall - 1,
                                cpu_numBig,
                                depth - 1,
                                depthMax,
                                !isCpuTurn,
                                predictions
                            )
                            if (tmp_score > score) {
                                score = tmp_score;
                                stone = C.STONE_LATTICE * C.STONE_PLAYER2;
                                px = x;
                                py = y;
                            }
                            this.removeStone(lattices, y, x);
                        }
                    }
                }
            }
            if (cpu_numBig > 0) {
                for (let y = 0; y < cells.length; y++) {
                    for (let x = 0; x < cells.length; x++) {
                        if (logics.canPut(cells, x, y)) {
                            this.putStone(cells, y, x, C.STONE_PLAYER2);
                            let tmp_score = this.minMax(
                                lattices,
                                cells,
                                player_numSmall,
                                player_numBig,
                                cpu_numSmall,
                                cpu_numBig - 1,
                                depth - 1,
                                depthMax,
                                !isCpuTurn,
                                predictions
                            )
                            if (tmp_score > score) {
                                score = tmp_score;
                                stone = C.STONE_CELL * C.STONE_PLAYER2;
                                px = x;
                                py = y;
                            }
                            this.removeStone(cells, y, x);
                        }
                    }
                }
            }
        }
        else {
            if (player_numSmall + player_numSmall === 0) {
                return logics.calcScore(lattices, cells, C.PLAYER2) - logics.calcScore(lattices, cells, C.PLAYER1);
            }
            if (player_numSmall > 0) {
                for (let y = 0; y < lattices.length; y++) {
                    for (let x = 0; x < lattices.length; x++) {
                        if (logics.canPut(lattices, x, y)) {
                            this.putStone(lattices, y, x, C.STONE_PLAYER1);
                            let tmp_score = this.minMax(
                                lattices,
                                cells,
                                player_numSmall - 1,
                                player_numBig,
                                cpu_numSmall,
                                cpu_numBig,
                                depth - 1,
                                depthMax,
                                !isCpuTurn,
                                predictions
                            )
                            if (tmp_score < score) {
                                score = tmp_score;
                                stone = C.STONE_LATTICE * C.STONE_PLAYER1;
                                px = x;
                                py = y;
                            }
                            this.removeStone(lattices, y, x);
                        }
                    }
                }
            }
            if (player_numBig > 0) {
                for (let y = 0; y < cells.length; y++) {
                    for (let x = 0; x < cells.length; x++) {
                        if (logics.canPut(cells, x, y)) {
                            this.putStone(cells, y, x, C.STONE_PLAYER1);
                            let tmp_score = this.minMax(
                                lattices,
                                cells,
                                player_numSmall,
                                player_numBig - 1,
                                cpu_numSmall,
                                cpu_numBig,
                                depth - 1,
                                depthMax,
                                !isCpuTurn,
                                predictions
                            )
                            if (tmp_score < score) {
                                score = tmp_score;
                                stone = C.STONE_CELL * C.STONE_PLAYER1;
                                px = x;
                                py = y;
                            }
                            this.removeStone(cells, y, x);
                        }
                    }
                }
            }
        }
        
        if (depth === depthMax) {
            return {
                score: score,
                stone: stone,
                px: px,
                py: py,
            };
        }
        else {
            console.log(depth + " - (" + px + ", " + py + ") =" + score);
            return score;
        }
    }

    putStone(stones, y, x, player) {
        stones[y][x] = player;
        return;
    }

    removeStone(stones, y, x) {
        stones[y][x] = C.STONE_EMPTY;
        return;
    }
}

export default LatticeCPU;