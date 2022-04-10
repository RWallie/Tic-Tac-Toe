import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import {boardState, currentPlayer} from '../atoms/atoms';
import '../board.css'

function Box(props) {
  // use the imported boardState atom
  const [board, setBoard] = useRecoilState(boardState);
  // use the imported currentPlayer atom
  const [currPlayer, setCurrPlayer] = useRecoilState(currentPlayer);
  // create an click handler function for whenever a box gets clicked that accepts the
  // position on the board of the current box
  function handleClick(i) {
    console.log('we in here!!');
    // update the board based on the current player
    const newBoard = [...board];
    newBoard[i] = currPlayer;
    setBoard(newBoard);
    // update the currentPlayer based on whatever currPlayer is at the moment
    const newPlayer = currPlayer === 'X' ? 'O' : 'X';
    setCurrPlayer(newPlayer);
  }
  return(
    <div className='individualBox' onClick={() => {handleClick(props.index)}}>
        {board[props.index]}
    </div>
  )
}

export default Box;