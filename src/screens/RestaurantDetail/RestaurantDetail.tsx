import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Restaurant} from '../../store/models';
import styles from './styles';
import useProcessRestaurantData from './useProcessRestaurantData';

/**
 *
 * @param params Restaurant detail object
 * @returns Component shows the restaurant details
 */
const RestaurantDetailScreen = ({route}: {route: any}) => {
  const restaurantDetail: Restaurant = route.params.data;

  const {dayTime, openStatus, isClosed} =
    useProcessRestaurantData(restaurantDetail);

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: restaurantDetail.logo,
        }}
      />
      <View style={styles.horizontal}>
        <Text style={styles.name}>{restaurantDetail.name}</Text>
        <Text style={styles.type}>{`* ${restaurantDetail.type}`}</Text>
      </View>
      <Text style={styles.reviewLabel}>Review:</Text>
      <Text numberOfLines={5} ellipsizeMode="tail" style={styles.review}>
        {restaurantDetail.review}
      </Text>
      <Text
        style={[
          styles.closedStatus,
          isClosed ? styles.redText : styles.greenText,
        ]}>
        {openStatus}
      </Text>
      <Text style={styles.hours}>{dayTime}</Text>
    </View>
  );
};

export default RestaurantDetailScreen;
