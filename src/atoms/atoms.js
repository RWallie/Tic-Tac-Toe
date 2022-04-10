import {atom, selector} from 'recoil';

export const boardState = atom({
  key: 'boardState',
  default: ['-','-','-','-','-','-','-','-','-']
});

export const currentPlayer = atom({
  key: 'currentPlayer',
  default: 'X'
});

export const gameOver = atom({
  key: 'gameOver',
  default: false
});

export const message = atom({
  key: 'string',
  default: '',
});

export const scoreboard = atom({
  key: 'scoreboard',
  default: { 'X': 0, 'O': 0}
});