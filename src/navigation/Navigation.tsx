import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Screen from '../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Restaurant List">
      <Stack.Screen name="Restaurant List" component={Screen.RestaurantList} />
      <Stack.Screen
        name="Restaurant Detail"
        component={Screen.RestaurantDetail}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
