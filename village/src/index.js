/* ========================================================================== */
/* React-Redux                                                                */
/* ========================================================================== */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* ========================================================================== */
/* Service Worker                                                             */
/* ========================================================================== */
import * as serviceWorker from './serviceWorker';

/* ========================================================================== */
/* Game Center                                                                */
/* ========================================================================== */
import LatticeContainer from './gamecenter/views/containers/LatticeContainer';
import LatticeStore from './gamecenter/stores/Lattice/LatticeStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={LatticeStore}>
      <LatticeContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
