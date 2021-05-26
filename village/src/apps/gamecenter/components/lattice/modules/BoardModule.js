import React from 'react';
import { Card } from 'react-bootstrap';

import BoardBlock from '../blocks/BoardBlock';

class BoardModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <b>Lattice Board</b>
                </Card.Header>
                <Card.Body>
                    <BoardBlock
                        stones={this.props.lattices}
                        size={"20px"}
                    />
                    <BoardBlock
                        stones={this.props.cells}
                        size={"50px"}
                    />
                </Card.Body>
            </Card>
        );
    }
}

export default BoardModule;