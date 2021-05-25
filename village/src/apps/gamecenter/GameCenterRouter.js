import React from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';

import PuzzlePanelContainer from './containers/PuzzlePanelContainer';
import PuzzlePanelStore from './stores/puzzlepanel/store';

import LatticeContainer from './containers/LatticeContainer';
import LatticeStore from './stores/lattice/store';

class GameCenterRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact path="/gamecenter/puzzlepanel">
                    <Provider store={PuzzlePanelStore}>
                        <PuzzlePanelContainer />
                    </Provider>
                </Route>
                <Route exact path="/gamecenter/lattice">
                    <Provider store={LatticeStore}>
                        <LatticeContainer />
                    </Provider>
                </Route>
            </div>
        )
    }
}

export default GameCenterRouter;