import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {backgroundColor: 'white', flex: 1},
  indicatorStyle: {position: 'absolute', top: '40%', left: '40%'},
  errorInfoBg: {
    backgroundColor: 'red',
    height: 20,
    width: '100%',
    alignItems: 'center',
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
  reviewLabel: {
    fontSize: 18,
    paddingLeft: 12,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },
  review: {
    fontSize: 14,
    paddingBottom: 12,
    paddingRight: 12,
    paddingLeft: 12,
    color: 'black',
    fontFamily: 'Arial',
  },
  closedStatus: {
    fontSize: 18,
    paddingLeft: 12,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },
  hours: {
    fontSize: 18,
    paddingLeft: 12,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },
  errorInfoText: {color: 'white', fontSize: 12},
  redText: {color: 'red'},
  greenText: {color: 'green'},
  image: {width: '100%', height: 380},
  horizontal: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default styles;
