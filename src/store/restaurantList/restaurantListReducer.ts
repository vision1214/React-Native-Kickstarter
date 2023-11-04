import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isEmpty: false,
  hasError: false,
  data: [],
};

const restaurantListSlice = createSlice({
  name: 'restaurantList',
  initialState,
  reducers: {
    fetchRestaurantList(state) {
      state.isLoading = true;
    },
    fetchRestaurantListSuccess(state, action) {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload;
      state.isEmpty = !state.data?.length;
    },
    fetchRestaurantListError(state) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {
  fetchRestaurantList,
  fetchRestaurantListSuccess,
  fetchRestaurantListError,
} = restaurantListSlice.actions;
export default restaurantListSlice.reducer;
