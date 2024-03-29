import React from 'react';
import Square from './Square';

// 사각형 9개를 렌더링한다
class Board extends React.Component {
  renderSquare(i) {
    let value = this.props.squares[i];
    if (i === this.props.lastPosition) {
      value = ( // Board단의 renderSquare에서 만져야 제대로 동작한다
        <span style={{ color: 'red' }}>
          {value}
        </span>
      );
    }
    return <Square 
      value={value} 
      onClick={() => this.props.onClick(i)} 
    />; // this.handleClick(i)
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
