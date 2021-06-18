import {StyleSheet} from 'react-native';
import COLORS from '../../helper/color';

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
    marginHorizontal: 20,
    flexDirection: 'row',

    alignItems: 'center',
  },
  itemText: {
    fontSize: 15,
    color: COLORS.GRAY,
  },
  Button: {
    backgroundColor: COLORS.BLUE,
    paddingHorizontal: 40,
    marginRight: 12,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 15,
    color: COLORS.WHITE,
  },
  Button2: {
    backgroundColor: "red",
    paddingHorizontal: 40,
    marginRight: 12,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 15,
    color: COLORS.WHITE,
  },
  UploadButton: {
    backgroundColor: COLORS.BLUE,
    alignSelf: 'center',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  ButtonText: {
    fontSize: 20,
    color: COLORS.WHITE,
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
    elevation: 1,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.01)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModelHeader:{
    fontSize:20,
    color:COLORS.BLACK,
    fontWeight:"600"
  },
  ModalBtn:{
    color:COLORS.BLACK,
    alignSelf:"flex-start",
    fontSize:17,
    fontWeight:"400",
    marginBottom:17
  }
});
