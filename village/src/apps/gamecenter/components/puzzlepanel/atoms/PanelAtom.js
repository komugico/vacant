import React from 'react';

import * as C from '../../../stores/puzzlepanel/constant';

class PanelAtom extends React.Component {
    constructor(props) {
        super(props);
    }

    imgPanel() {
        if (this.props.panel === C.PANEL_FRONT) {
            return (
                <img
                    src={process.env.PUBLIC_URL + "/images/luffy.png"}
                    style={{ height: "50px" }}
                />
            );
        }
        else {
            return (
                <img
                    src={process.env.PUBLIC_URL + "/images/enel.png"}
                    style={{ height: "50px" }}
                />
            );
        }
    }

    render() {
        return (
            <div>
                { this.imgPanel() }
            </div>
        );
    }
}

export default PanelAtom;