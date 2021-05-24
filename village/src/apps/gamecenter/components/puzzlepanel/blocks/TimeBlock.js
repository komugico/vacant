import React from 'react';

class TimeBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    getMin() {
        return Math.floor(this.props.seconds / 60);
    }

    getSec() {
        return ('00' + (this.props.seconds % 60)).slice( -2 );
    }

    render() {
        return (
            <h1>{this.getMin()}:{this.getSec()}</h1>
        );
    }
}

export default TimeBlock;