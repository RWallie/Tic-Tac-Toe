import React from 'react';
import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';
import Board from './components/board';

function App() {
  return (
    <RecoilRoot>
      <Board/>
    </RecoilRoot>
  )
}

export default App;