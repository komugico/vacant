import React from 'react';

import * as C from '../../../stores/lattice/constants';

class StoneAtom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            height: this.props.size + 'px',
            position: 'relative',
        }
        if (this.props.stone === C.STONE_PLAYER1) {
            return (
                <img src={process.env.PUBLIC_URL + C.IMG_PATH_BLACK} style={style} />
            );
        }
        else if (this.props.stone === C.STONE_PLAYER2) {
            return (
                <img src={process.env.PUBLIC_URL + C.IMG_PATH_WHITE} style={style} />
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default StoneAtom;