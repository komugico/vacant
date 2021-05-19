import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../stores/apps/home/action';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to My Home</h1>
                <button onClick={this.props.act_welcome}>Click Me</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(HomeContainer);