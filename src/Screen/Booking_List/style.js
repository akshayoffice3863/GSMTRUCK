import {StyleSheet} from 'react-native';
import COLORS from '../../helper/color';
import Font from '../../helper/fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  Header: {
    height: 60,
    justifyContent: 'center',
  },
  HeaderColor: {
    backgroundColor: COLORS.BLUE,
  },
  Logout: {
    resizeMode: 'cover',
    marginHorizontal: 15,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 17,
    color: COLORS.GRAY,
    fontFamily: Font.FA_REG_400,
  },
  Button: {
    backgroundColor: COLORS.BLUE,
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 15,
    color: COLORS.WHITE,
  },

  title: {
    fontSize: 16,
  },
});
