import React from 'react';

class PanelAtom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h4>({this.props.y}, {this.props.x})</h4>
        );
    }
}

export default PanelAtom;