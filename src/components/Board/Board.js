import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {
  componentWillMount = () => {
    // window.addEventListener( 'mousedown', this.handleMouseDown);
  };
  componentWillUnmount = () => {
    // window.removeEventListener( 'mousedown', this.handleMouseDown);
  };
  handleMove = (row, col, colour, left_button) => {
    this.props.onMove( row, col, colour==="black", left_button);
  };
  render = () => {
    const table_row = {
      display: "flex",
      flexDirection: "row",
      flexGrow: "0",
      flexWrap: "nowrap"
    };
    const rows = this.props.cells.map( ( row, i) => {
      return (
        <div key={i} style={table_row}>{
          row.map( (col, j) => {
            const colour = (col)?"black":"white";
            return (
              <Cell key={i*100+j} onMove={this.handleMove}
                row={i} col={j} colour={colour} />
            );
          })
        }</div>
      );
    });
    return (
      <div>{rows}</div>
    );
  };
}
