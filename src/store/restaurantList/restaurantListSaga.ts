import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from '@env';

import {
  fetchRestaurantList,
  fetchRestaurantListError,
  fetchRestaurantListSuccess,
} from './restaurantListReducer';

function* fetchRestaurantListData(): Generator<any> {
  try {
    const data: any = yield call(fetchRandomRestaurantsAPI);

    yield put(fetchRestaurantListSuccess(data));
  } catch (error) {
    console.log(
      'ERROR in API response of fetchRestaurantList--> ' +
        JSON.stringify(error),
    );
    yield put(fetchRestaurantListError());
  }
}

export const fetchRandomRestaurantsAPI = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/restaurant/random_restaurant?size=100`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

function* restaurantListSaga() {
  yield takeLatest(fetchRestaurantList, fetchRestaurantListData);
}

export default restaurantListSaga;
