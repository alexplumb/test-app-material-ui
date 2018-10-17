import {
    all, take, put,
  } from 'redux-saga/effects';

  function* testSessionFlow() {
    while (true) {
      yield take('TEST_SESSION');

      yield put({
          type: 'SET_CURRENT_SESSION_USER',
          user: 'test',
      });
    }
  }
  
  function* sessionSaga() {
    yield all([
      testSessionFlow(),
    ]);
  }
  
  export default sessionSaga;
  