import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Restaurant} from '../../store/models';
import FastImage from 'react-native-fast-image';

export interface ListItemProps {
  item: Restaurant;
  ItemClickCallback: (data: Restaurant) => void;
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
      <View style={styles.listItem}>
        <FastImage
          style={styles.image}
          source={{
            uri: item.logo,
          }}></FastImage>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.type}>{`* ${item.type}`}</Text>
        </View>
        <Text numberOfLines={5} ellipsizeMode="tail" style={styles.description}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
