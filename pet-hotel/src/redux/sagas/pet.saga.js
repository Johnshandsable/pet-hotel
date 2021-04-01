import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getPets() {
  try {
    const response = yield axios.get('/api/pets/all');
    yield put({ type: 'SET_PETS', payload: response.data });
  } catch (err) {
    console.error('an error occurred on GET', err);
  }
}

function* petSaga() {
  yield takeLatest('GET_PETS', getPets);
}

export default petSaga;
