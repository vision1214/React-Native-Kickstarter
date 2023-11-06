import {all, fork} from 'redux-saga/effects';

import restaurantListSaga from './restaurantList/restaurantListSaga';

const sagas = [restaurantListSaga];

function* rootSaga() {
  yield all(sagas.map(fork));
}

export default rootSaga;
