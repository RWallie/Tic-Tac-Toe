import React from 'react';
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from 'recoil';

import Box from './box';
import '../board.css'
function Board() {
  // create an array to contain individual box components
  const board = [];
  // provide an attribute for each box as the index position of the board they will represent
  for (let i = 0; i < 9; i++){
    board.push(<Box key={i} index={i}/>)
  }
  return (
    <div id='boardContainer'>
      {board}
    </div>
  )
}

export default Board;