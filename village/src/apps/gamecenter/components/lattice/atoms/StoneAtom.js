import React from 'react';

import * as C from '../../../stores/lattice/constants';

class StoneAtom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.stone == C.STONE_PALYER1) {
            return (
                <div>1</div>
            );
        }
        else if (this.props.stone == C.STONE_PLAYER2) {
            return (
                <div>2</div>
            );
        }
        else {
            return (
                <div>0</div>
            )
        }
    }
}

export default StoneAtom;