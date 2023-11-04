import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Strings from '../../Strings/en';

/**
 *
 * @returns This is the default screen when there is any issue with internet connection
 */
const NoInternetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noInternetText}>
      {Strings.errors.networkError}
      </Text>
    </View>
  );
};

export default NoInternetScreen;
