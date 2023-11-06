import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';

import Strings from '../../strings/en';
import AutocompleteListItem from './AutocompleteListItem';
import styles from './styles';

export interface ListItemProps {
  data: string[];
  filterCallback: (data: string) => void;
  ref: any;
}

/**
 * This custom component provides assistance to data filter
 * @param param0 Data to filter
 * @param param1 callback method called after filter item selection
 * @returns
 */
const AutocompleteSearch: React.FC<ListItemProps> = forwardRef(
  ({data, filterCallback}, ref) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    let debounceTimeout: number;

    useImperativeHandle(ref, () => ({
      clearSearch() {
        setQuery('');
      },
    }));

    const handleInputChange = (text: string) => {
      setQuery(text);
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        handleSearch(text);
      }, 500);
    };

    const handleSearch = (text: string) => {
      if (text) {
        const filteredData: string[] = data.filter(item =>
          item.toLowerCase().includes(text.toLowerCase()),
        );
        setSuggestions(filteredData);
      } else {
        setSuggestions([]);
      }
    };

    const renderItem = ({item}: {item: string}) => (
      <AutocompleteListItem item={item} ItemClickCallback={handleItemPress} />
    );

    const handleItemPress = (item: string) => {
      setSuggestions([]);
      setQuery(item);
      filterCallback(item);
    };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={Strings.text.search}
          value={query}
          onChangeText={handleInputChange}
        />
        <FlatList
          style={styles.list}
          data={suggestions}
          renderItem={renderItem}
          keyExtractor={(item, index) => 'key' + index}
        />
      </View>
    );
  },
);

export default AutocompleteSearch;
