import {call, put, takeLatest} from 'redux-saga/effects';

import {fetchData} from '../../service/api';
import {getRestaurants} from '../../service/endpoint';
import {
  fetchRestaurantList,
  fetchRestaurantListError,
  fetchRestaurantListSuccess,
} from './restaurantListReducer';

function* fetchRestaurantListData(): Generator<any> {
  try {
    const data: any = yield call(fetchRandomRestaurants);

    yield put(fetchRestaurantListSuccess(data));
  } catch (error) {
    console.log(
      'ERROR in API response of fetchRestaurantList--> ' +
        JSON.stringify(error),
    );
    yield put(fetchRestaurantListError());
  }
}

export const fetchRandomRestaurants = async () => {
  return await fetchData(getRestaurants);
};

function* restaurantListSaga() {
  yield takeLatest(fetchRestaurantList, fetchRestaurantListData);
}

export default restaurantListSaga;
