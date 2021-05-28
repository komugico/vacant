import * as logics from './logics';
import * as actions from './actions';
import * as C from './constants';

class LatticeCPU {
    constructor() {
        
    }

    think(lattices, cells, depth) {
        for (let y = 0; y < lattices.length; y++) {
            for (let x = 0; x < lattices.length; x++) {
                if (lattices[y][x] === C.STONE_EMPTY) {
                    return {
                        x: x,
                        y: y,
                    };
                }
            }
        }
    }
}

export default LatticeCPU;