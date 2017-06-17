import React from 'react';

export default class Cell extends React.Component {
  handleMove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onMove( this.props.row, this.props.col, this.props.colour, (e.buttons===1));
  };
  handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onMove( this.props.row, this.props.col, this.props.colour, 1);
  };
  handleMouseUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onMove( this.props.row, this.props.col, this.props.colour, 0);
  };
  render = () => {
    const table_cell = {
      border: "1px solid rgba( 127,127,127,0.8)"
    };
    return (
      <div onMouseMove={this.handleMove} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}
        style={{...table_cell, width:"8px", height:"8px", backgroundColor:this.props.colour}}>
      </div>
    );
  };
}
