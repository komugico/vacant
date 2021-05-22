/* ========================================================================== */
/* React-Redux                                                                */
/* ========================================================================== */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

/* ========================================================================== */
/* App Routers                                                                */
/* ========================================================================== */
import HomeRouter from './apps/home/HomeRouter';
import GameCenterRouter from './apps/gamecenter/GameCenterRouter';

ReactDOM.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <HomeRouter />
            <GameCenterRouter />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);