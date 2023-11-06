import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

interface ErrorProps {
  errorText: string;
}

/**
 *
 * @returns This is the default screen when there is any issue with internet connection
 */
const ErrorScreen: React.FC<ErrorProps> = ({errorText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.noInternetText}>{errorText}</Text>
    </View>
  );
};

export default ErrorScreen;
