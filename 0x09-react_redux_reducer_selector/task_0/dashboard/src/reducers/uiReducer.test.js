import uiReducer, { initialState } from './uiReducer';

describe('suite for our simple reducer', () => {
  it(' verifying the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});

    expect(state).toEqual(initialState);
  });
});
