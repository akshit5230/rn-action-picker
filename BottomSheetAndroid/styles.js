import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default StyleSheet.create({
  modalview: {
    height: '100%',
    width: '100%',
    backgroundColor: '#00000036',
    // justifyContent: 'flex-end',
    // alignItems: 'center'
  },
  modallistview: {
    backgroundColor: '#FFF',
    // flex: 1,
    // width: Dimensions.get('window').width - 20,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    // justifyContent: 'center',
    // alignSelf: 'center'
  },
  modallistitemview: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingHorizontal: 10
    backgroundColor: '#FFFFFF',
    height: 40,
    justifyContent: 'center',
    padding: 10
  },
  recommendtext: {
    color: '#566985',
    fontSize: 15,
    // textAlign: 'center',
    // fontFamily: 'Cairo-Regular',
    // padding: 8,
    // paddingTop: 0
  },
});