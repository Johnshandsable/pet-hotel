import { all } from 'redux-saga/effects';
import petSaga from './pet.saga';
import ownerSaga from './owner.saga';

export default function* rootSaga() {
  yield all([petSaga(), ownerSaga()]);
}
