/* ========================================================================== */
/* React-Redux                                                                */
/* ========================================================================== */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

/* ========================================================================== */
/* Service Worker                                                             */
/* ========================================================================== */
import * as serviceWorker from './serviceWorker';

/* ========================================================================== */
/* Containers & Stores                                                        */
/* ========================================================================== */
import HomeContainer from './views/apps/home/containers/HomeContainer';
import HomeStore from './stores/home/store';

import PuzzlePanelContainer from './views/apps/gamecenter/containers/PuzzlePanelContainer';
import PuzzlePanelStore from './stores/gamecenter/store';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/">
                <Provider store={HomeStore}>
                    <HomeContainer />
                </Provider>
            </Route>
            <Route exact path="/gamecenter/puzzlepanel">
                <Provider store={PuzzlePanelStore}>
                    <PuzzlePanelContainer />
                </Provider>
            </Route>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
