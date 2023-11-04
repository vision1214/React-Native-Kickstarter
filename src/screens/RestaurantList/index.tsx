import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useRestaurantList} from '../../store/restaurantList/useRestaurantList';
import styles from './styles';
import {Restaurant} from '../../store/models';
import DummyRestaurantList from '../../utility/MockResponse';
import ListItem from '../../components/RestaurantListItem/index';
import AutocompleteSearch from '../../components/AutocompleteSearch/AutocompleteSearch';
import Strings from '../../Strings/en';

/**
 *
 * @returns A Component which lists random restaurant. Also, user can search the restaurants on the basis of their type (eg. Vegan etc)
 */
const RestaurantListScreen = ({navigation}: {navigation: any}) => {
  const {isLoading, isEmpty, data, hasError} = useRestaurantList();
  const filterArray: string[] = [...new Set(data.map(a => a.type))];
  const [filteredRestaurants, setFilteredRestaurants] = useState(data);

  useEffect(() => {
    setFilteredRestaurants(data);
    const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const millis = now.getMilliseconds().toString().padStart(2, '0');

const currentTimeWithSeconds = `${seconds}:${millis}`;

console.log('Current time with seconds:', currentTimeWithSeconds);
    console.log("DATA-CHANGED----");
  }, [data]);

  // Callback function passed to autocompete component to get the selected filter
  const filterCallback = (message: string) => {
    setFilteredRestaurants(
      DummyRestaurantList.filter(x => x.type.startsWith(message)),
    );
  };

  //Restaurant list item click
  const ItemClickCallback = (restaurantData: Restaurant) => {
    setFilteredRestaurants(data);
    navigation.navigate('Restaurant Detail', {data: restaurantData});
  };

  // Function to clear the filter
  const clearPressed = () => {
    setFilteredRestaurants(data);
  };

  return (
    <View style={styles.container}>
      {isLoading && filteredRestaurants.length == 0 ? (
        <ActivityIndicator size="large" style={styles.indicatorStyle} />
      ) : (
        <View>
          <View style={styles.filterView}>
            <AutocompleteSearch
              data={filterArray}
              filterCallback={filterCallback}></AutocompleteSearch>
            <TouchableOpacity onPress={clearPressed}>
              <Text style={styles.clearButton}>{Strings.buttons.clear}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredRestaurants}
            renderItem={({item}) => (
              <ListItem item={item} ItemClickCallback={ItemClickCallback} />
            )}
            keyExtractor={(item, index) => item.id.toString() + index.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default React.memo(RestaurantListScreen);
