import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the remaining space
    marginRight: 8, // Some spacing between TextInput and Button
    padding: 8,
    marginLeft: 16,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 2,
    elevation: 6,
    backgroundColor: '#ffffff',
  },
  input: {borderBottomWidth: 1, padding: 10},
  list: {marginLeft: 16, marginRight: 16, maxHeight: 200},
  searchText: {padding: 10},
});

export default styles;
