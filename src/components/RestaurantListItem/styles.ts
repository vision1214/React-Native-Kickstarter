import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listItem: {
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    marginHorizontal: 16,
    elevation: 24,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    padding: 12,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },
  type: {
    fontSize: 18,
    padding: 12,
    color: 'grey',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },
  description: {
    fontSize: 14,
    paddingBottom: 12,
    paddingRight: 12,
    paddingLeft: 12,
    color: 'black',
    fontFamily: 'Arial',
  },
  horizontal: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default styles;
