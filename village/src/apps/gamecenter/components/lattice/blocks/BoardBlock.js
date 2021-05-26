import React from 'react';
import { Row, Col } from 'react-bootstrap';

import StoneAtom from '../atoms/StoneAtom';

class BoardBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    tableBoard() {
        let trs = this.props.stones.map((row, y) => {
            return this.trBoard(row, y);
        });
        let style = {
            position: 'absolute',
            left: 0,
            top: 0
        }
        return (
            <table style={style}>
                <tbody>
                    {trs}
                </tbody>
            </table>
        );
    }

    trBoard(row, y) {
        let tds = row.map((col, x) => {
            return this.tdBoard(col, y, x);
        });
        return (
            <tr>
                {tds}
            </tr>
        );
    }

    tdBoard(col, y, x) {
        let style = {
            width: '20px',
            height: '20px',
            border: 'solid 1px',
            textAlign: 'center',
            zIndex: 0,
        }
        return (
            <td style={style}>
                <StoneAtom
                    stone={col}
                    size={this.props.size}
                />
            </td>
        )
    }

    render() {
        return (
            <Row>
                <Col></Col>
                <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                    <div style={{ position: 'relative', paddingTop: '100%' }}>
                        {this.tableBoard()}
                    </div>
                </Col>
                <Col></Col>
            </Row>
        );
    }
}

export default BoardBlock;