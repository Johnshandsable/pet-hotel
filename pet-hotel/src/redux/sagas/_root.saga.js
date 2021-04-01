import { all } from 'redux-saga/effects';
import petSaga from './pet.saga';

export default function* rootSaga() {
  yield all([petSaga()]);
}
