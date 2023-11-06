import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export interface ListItemProps {
  item: string;
  ItemClickCallback: (data: string) => void;
}

/**
 * This custom component gives the UI for Restaurant item
 * @param param0 Restaurant data
 * @param param1 callback method called after restaurant selection
 * @returns
 */
const ListItem: React.FC<ListItemProps> = ({item, ItemClickCallback}) => {
  const handleItemPress = () => {
    ItemClickCallback(item);
  };
  return (
    <TouchableOpacity onPress={() => handleItemPress()}>
      <Text style={styles.searchText}>{item}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ListItem);
