import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getOwners() {
  try {
    const response = yield axios.get('/api/owners/all');
    yield put({ type: 'SET_OWNERS', payload: response.data });
  } catch (err) {
    console.error('an error occurred on GET', err);
  }
}

function* ownerSaga() {
  yield takeLatest('GET_OWNERS', getOwners);
}

export default ownerSaga;
