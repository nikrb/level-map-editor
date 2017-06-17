import React, { Component } from 'react';
import Game from './components/Game/Game';
import {Board} from './components/Board';
import Hud from './components/Hud';
import './App.css';

class App extends Component {
  state = {
    map_cells : []
  };
  row_count = 30;
  col_count = 40;
  last_button = false;
  last_row = -1;
  last_col = -1;
  game = Game( {rows:this.row_count, cols:this.col_count});
  componentDidMount = () => {
    this.game.setBorder();
    this.setState( {map_cells: this.game.getBoard()});
  };
  handleClick = (row,col,wall,buttons) => {
    console.log( `handleCellClick (${row},${col})`);
    const new_state = wall?0:1;
    this.game.setCell( row, col, new_state);
    this.setState( {board_cells: this.game.getBoard()});
  };
  handleMove = (row, col, wall, mouse_button) => {
    // don't allow outside border to be changed
    let border = false;
    if( row === 0 || row === this.row_count-1 || col === 0 || col === this.col_count-1 ){
      border = true;
    }
    // mouse button can be truthy or falsey so loose comparison
    if( !border && ( row !== this.last_row || col !== this.last_col ||
                      // eslint-disable-next-line
                      mouse_button != this.last_button)){
      const nw = mouse_button? !wall:wall;
      this.game.setCell( row, col, nw);
      this.setState( {board_cells: this.game.getBoard()});
    }
    this.last_button = mouse_button;
    this.last_row = row;
    this.last_col = col;
  };
  handleSave = () => {
    console.log( "handleSave");
    // save
    console.log( JSON.stringify( this.game.getBoard()));
  };
  render() {
    return (
      <div className="App">
        <h2>Map Editor</h2>
        <Hud onSave={this.handleSave}/>
        <Board cells={this.state.map_cells} onMove={this.handleMove}/>
      </div>
    );
  }
}

export default App;
