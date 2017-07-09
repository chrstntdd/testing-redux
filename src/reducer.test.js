import reducer from './reducer';
import { makeGuess, toggleInfoModal, newGame } from './actions';

describe('hotAndColdReducer', () => {
  it('Should set the initial state when nothing is passed in ', () => {
    const state = reducer(undefined, { type: 'SOMETHING' });
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfoModal).toEqual(false);
  });
  it('Should return the current state when an unknown action is passed in', () => {
    let currentState = {};
    const state = reducer(currentState, { type: 'SOMETHING' });
    expect(state).toBe(currentState);
  });
  describe('makeGuess', () => {
    it('Should make a guess', () => {
      let state = {
        guesses: [],
        feedback: '',
        correctAnswer: 100
      };

      state = reducer(state, makeGuess(25));
      expect(state.guesses).toEqual([25]);
      expect(state.feedback).toEqual("You're Ice Cold...");

      state = reducer(state, makeGuess(60));
      expect(state.guesses).toEqual([25, 60]);
      expect(state.feedback).toEqual("You're Cold...");

      state = reducer(state, makeGuess(80));
      expect(state.guesses).toEqual([25, 60, 80]);
      expect(state.feedback).toEqual("You're Warm");

      state = reducer(state, makeGuess(95));
      expect(state.guesses).toEqual([25, 60, 80, 95]);
      expect(state.feedback).toEqual("You're Hot!");

      state = reducer(state, makeGuess(100));
      expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
      expect(state.feedback).toEqual('You got it!');
    });
  });
  describe('toggleInfoModal', () => {
    it('Should toggle the info modal on', () => {
      let state = {
        showInfoModal: false
      };
      state = reducer(state, toggleInfoModal());
      expect(state.showInfoModal).toEqual(true);
    });
    it('Should toggle the info modal off', () => {
      let state = {
        showInfoModal: true
      };
      state = reducer(state, toggleInfoModal());
      expect(state.showInfoModal).toEqual(false);
    });
  });
  describe('newGame', () => {
    it('Should start a new game', () => {
      let state = {
        guesses: [0, 54, 67, 85, 86],
        correctAnswer: 86,
        feedback: 'You got it!'
      };
      state = reducer(state, newGame());
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(state.correctAnswer).toBeLessThanOrEqual(100);
    });
  });
});
