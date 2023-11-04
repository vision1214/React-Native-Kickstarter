import React, {useState} from 'react';
import {View, TextInput, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import Strings from '../../Strings/en';

interface ListItemProps {
  data: string[];
  filterCallback: (data: string) => void;
}

/**
 * This custom component provides assistance to data filter
 * @param param0 Data to filter
 * @param param1 callback method called after filter item selection
 * @returns
 */
const AutocompleteSearch: React.FC<ListItemProps> = ({
  data,
  filterCallback,
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (text: string) => {
    setQuery(text);
    if (text) {
      const filteredData: string[] = data.filter(item =>
        item.toLowerCase().includes(text.toLowerCase()),
      );
      setSuggestions(filteredData);
    } else {
      setSuggestions([]);
    }
  };

  const Item = ({item}: {item: string}) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <Text style={{padding: 10}}>{item}</Text>
    </TouchableOpacity>
  );

  const handleItemPress = (item: string) => {
    setSuggestions([]);
    setQuery('');
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
        renderItem={Item}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
};

export default AutocompleteSearch;
