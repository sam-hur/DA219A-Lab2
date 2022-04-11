import React, { Component } from 'react';
import TableBody from './body.table';
import TableHead from './head.table';

class Table extends Component {
    render() {
        return (
            <table>
                <TableHead />
                <TableBody />
            </table>
        )
    }
}

export default Table;