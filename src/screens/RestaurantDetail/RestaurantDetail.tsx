import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {DaySchedule, OpeningHours, Restaurant} from '../../store/models';
import FastImage from 'react-native-fast-image';
import useProcessRestaurantData from './useProcessRestaurantData';

/**
 *
 * @param params Restaurant detail object
 * @returns Component shows the restaurant details
 */
const RestaurantDetailScreen = ({route}: {route: any}) => {
  const restaurantDetail: Restaurant = route.params.data;

  const {dayTime, openStatus, isClosed} = useProcessRestaurantData(restaurantDetail);
 
  return (
    <View style={styles.container}>
      <FastImage
        style={{width: '100%', height: 380}}
        source={{
          uri: restaurantDetail.logo,
        }}></FastImage>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          isClosed ? styles.redText : styles.blackText,
        ]}>
        {openStatus}
      </Text>
      <Text style={styles.hours}>{dayTime}</Text>
    </View>
  );
};

export default RestaurantDetailScreen;
