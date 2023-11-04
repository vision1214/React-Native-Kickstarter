import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 24,
    marginBottom: 8,
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  clearButton: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {backgroundColor: 'white', flex: 1},
  indicatorStyle: {position: 'absolute', top: '40%', left: '40%'},
  errorInfoBg: {
    backgroundColor: 'red',
    height: 20,
    width: '100%',
    alignItems: 'center',
  },
  errorInfoText: {color: 'white', fontSize: 12},
});

export default styles;
