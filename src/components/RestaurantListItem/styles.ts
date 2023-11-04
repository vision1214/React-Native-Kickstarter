import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listItem: {
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 24,
    marginBottom: 8,
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
});

export default styles;
