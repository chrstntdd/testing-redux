import {
  NEW_GAME,
  MAKE_GUESS,
  TOGGLE_INFO_MODAL,
  newGame,
  makeGuess,
  toggleInfoModal
} from './actions.js';

describe('newGame', () => {
  it('Should return the action', () => {
    const correctAnswer = Math.round(Math.random() * 100);
    const action = newGame(correctAnswer);
    expect(action.type).toEqual(NEW_GAME);
  });
});

describe('makeGuess', () => {
  it('Should return the action', () => {
    const guess = Math.round(Math.random * 100);
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});

describe('toggleInfoModal', () => {
  it('Should return the action', () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
  });
});
