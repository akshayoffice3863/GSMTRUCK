import {StyleSheet} from 'react-native';

//IMPORT PATH
import COLORS from '../../helper/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  LoginContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  Hading: {
    fontSize: 30,
    color: COLORS.BLACK,
    marginBottom: 40,
  },
  TextInput: {
    fontSize: 20,
    borderColor: COLORS.GRAY,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 40,
  },
  Button: {
    backgroundColor: COLORS.BLUE,
    marginTop: 40,
    alignSelf: 'flex-end',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 5,
  },
  ButtonText: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    marginTop:5
},
});
