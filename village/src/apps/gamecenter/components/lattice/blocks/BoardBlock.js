import React from 'react';

import StoneAtom from '../atoms/StoneAtom';

class BoardBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            px: -1,
            py: -1,
        }
    }

    styleSelected() {
        return {
            backgroundImage: '-webkit-radial-gradient(#ff0000 0%, #ffffff 70%)',
            backgroundImage: 'radial-gradient(#ff0000 0%, #ffffff 70%)',
        }
    }

    tbodyBoard() {
        let trs = this.props.stones.map((row, y) => {
            return this.trBoard(row, y);
        });
        return (
            <tbody>
                {trs}
            </tbody>
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
        let style = this.props.styles.td;
        if (this.props.px === x && this.props.py === y && this.props.isGrabbed) {
            style = {
                ...style,
                ...this.styleSelected(),
            }
        }
        return (
            <td
                style={style}
                onMouseEnter={() => this.handle_enter_td(x, y)}
                onClick={() => this.handle_click_td(x, y)}
            >
                <StoneAtom
                    stone={col}
                    size={this.props.size}
                />
            </td>
        )
    }

    handle_enter_td(x, y) {
        if (this.props.updatePxPy) {
            this.props.updatePxPy(x, y);
        }
    }

    handle_click_td(x, y) {
        if (this.props.act_put_stone) {
            this.props.act_put_stone(x, y);
        }
    }

    handle_leave_table() {
        if (this.props.updatePxPy) {
            this.props.updatePxPy(-1, -1);
        }
    }

    render() {
        return (
            <table
                style={this.props.styles.table}
                onMouseLeave={() => this.handle_leave_table()}
            >
                {this.tbodyBoard()}
            </table>
        );
    }
}

export default BoardBlock;