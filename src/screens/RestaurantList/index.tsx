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
import AutocompleteSearch from '../../components/AutocompleteSearch';
import Strings from '../../Strings/en';
import ErrorScreen from '../Error';

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
  }, [data]);

  useEffect(() => {
  }, [hasError]);

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
      {hasError ? <ErrorScreen errorText={Strings.errors.generalError}/> :
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
      </View>}
    </View>
  );
};

export default React.memo(RestaurantListScreen);
