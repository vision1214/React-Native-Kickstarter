import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AutocompleteSearch from '../../components/AutocompleteSearch/AutocompleteSearch';
import ListItem from '../../components/RestaurantListItem/RestaurantListItem';
import {Restaurant} from '../../store/models';
import {useRestaurantList} from '../../store/restaurantList/useRestaurantList';
import Strings from '../../strings/en';
import ErrorScreen from '../Error/Error';
import styles from './styles';

/**
 *
 * @returns A Component which lists random restaurant. Also, user can search the restaurants on the basis of their type (eg. Vegan etc)
 */
const RestaurantListScreen = ({navigation}: {navigation: any}) => {
  const {isLoading, data, hasError} = useRestaurantList();
  const filterArray: string[] = [...new Set(data.map(a => a.type))];
  const [filteredRestaurants, setFilteredRestaurants] = useState(data);
  const [currentFilter, setCurrentFilter] = useState('');
  const autocompleteSearchRef = useRef();

  useEffect(() => {
    if (currentFilter) {
      setFilteredRestaurants(
        data.filter(x => x.type.startsWith(currentFilter)),
      );
    } else {
      setFilteredRestaurants(data);
    }
  }, [currentFilter, data]);

  // Callback function passed to autocompete component to get the selected filter
  const handleFilter = (message: string) => {
    setCurrentFilter(message);
    setFilteredRestaurants(data.filter(x => x.type.startsWith(message)));
  };

  //Restaurant list item click
  const ItemClickCallback = (restaurantData: Restaurant) => {
    // onPressClear();
    navigation.navigate('Restaurant Detail', {data: restaurantData});
  };

  // Function to clear the filter
  const onPressClear = () => {
    setFilteredRestaurants(data);
    setCurrentFilter('');
    if (autocompleteSearchRef.current) {
      // @ts-ignore
      autocompleteSearchRef.current.clearSearch();
    }
  };

  const renderItem = ({item}: {item: Restaurant}) => (
    <ListItem item={item} ItemClickCallback={ItemClickCallback} />
  );

  return (
    <View style={styles.container}>
      {hasError ? (
        <ErrorScreen errorText={Strings.errors.generalError} />
      ) : (
        <View style={styles.container}>
          {isLoading && filteredRestaurants.length === 0 ? (
            <ActivityIndicator size="large" style={styles.indicatorStyle} />
          ) : (
            <View>
              <View style={styles.filterView}>
                <AutocompleteSearch
                  data={filterArray}
                  filterCallback={handleFilter}
                  ref={autocompleteSearchRef}
                />
                <TouchableOpacity onPress={onPressClear}>
                  <Text style={styles.clearButton}>
                    {Strings.buttons.clear}
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                testID="restaurant-flat-list"
                data={filteredRestaurants}
                renderItem={renderItem}
                keyExtractor={(item, index) =>
                  item.id.toString() + index.toString()
                }
                maxToRenderPerBatch={15}
                windowSize={3}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default RestaurantListScreen;
