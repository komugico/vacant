import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PanelAtom from '../atoms/PanelAtom';

class BoardBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    tableBoard() {
        let trs = this.props.panels.map((row, y) => {
            return this.trBoard(row, y);
        });
        return (
            <table style={{border: "solid 1px"}}>
                {trs}
            </table>
        );
    }

    trBoard(row, y) {
        let tds = row.map((col, x) => {
            return this.tdBoard(col, y, x);
        });
        return (
            <tr style={{border: "solid 1px"}}>
                {tds}
            </tr>
        );
    }

    tdBoard(col, y, x) {
        return (
            <td style={{border: "solid 1px"}}>
                <PanelAtom
                    direction={col}
                    x={x}
                    y={y}
                />
            </td>
        )
    }

    render() {
        return (
            <Row>
                <Col></Col>
                <Col>
                    {this.tableBoard()}
                </Col>
                <Col></Col>
            </Row>
        );
    }
}

export default BoardBlock;