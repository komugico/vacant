import React from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';

import HomeContainer from './containers/HomeContainer';
import HomeStore from './stores/home/store';

class HomeRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact path="/">
                    <Provider store={HomeStore}>
                        <HomeContainer />
                    </Provider>
                </Route>
            </div>
        )
    }
}

export default HomeRouter;