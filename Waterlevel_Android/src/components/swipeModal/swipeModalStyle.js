import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000000e9',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 700,
    position: 'absolute',
    // opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  mainWrapper: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 800,
    padding: 50,
    borderRadius: 20,
    width: '100%',
  },
  iconWrappa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconstyle: {
    backgroundColor: '#E7E7E7',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  textStyle: {
    marginLeft: 20,
    marginRight: 70,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
  },
  buttomButton: {
    backgroundColor: '#555555',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60 / 2,
    alignSelf: 'flex-end',
  },
  topLine: {
    backgroundColor: 'black',
    alignSelf: 'center',
    height: 4,
    width: 70,
    zIndex: 1200,
    position: 'absolute',
    top: -160,
  },
});
