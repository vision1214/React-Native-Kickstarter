import {useEffect, useMemo, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store';

import {fetchRestaurantList} from './restaurantListReducer';
import {Restaurant} from '../../store/models';

export const useRestaurantList = () => {
  const data: Restaurant[] = useAppSelector(state => state.restaurantList.data);
  const isLoading = useAppSelector(state => state.restaurantList.isLoading);
  const isEmpty = useAppSelector(state => state.restaurantList.isEmpty);
  const hasError = useAppSelector(state => state.restaurantList.hasError);

  const dispatch = useAppDispatch();
  const fetch = useRef(() => dispatch(fetchRestaurantList())).current;

  useEffect(() => {
    console.log('useRestaurantList--> GOING TO FETCH RESTAURANT LIST DATA');
    fetch();
    const intervalId = setInterval(() => {
      console.log("GOING TO FETCH RESTAURANT LIST")
      fetch();
    }, 10 * 1000); // 10 seconds in milliseconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return useMemo(
    () => ({fetch, isLoading, isEmpty, hasError, data}),
    [fetch, isLoading, isEmpty, hasError, data],
  );
};
