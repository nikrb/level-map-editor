import React from 'react';

export default class Hud extends React.Component {
  handleSave = () => {
    this.props.onSave();
  };
  render = () => {
    const style={ marginBottom:"10px"};
    return (
      <div style={style}>
        <button onClick={this.handleSave} >Save</button>
      </div>
    );
  };
}
