import { fork } from 'redux-saga/effects';
import sessionSaga from './session';

export default function* rootSaga() {
  yield [
    fork(sessionSaga),
  ];
}
