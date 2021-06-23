import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Animated,
  
} from 'react-native';
import Styles from './styles';
import Logout from '../../../assets/Images/logout.png';
import goBack from '../../../assets/Images/goBack.png';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MediaUpload} from '../../Api/Api';

const index = ({navigation, route}) => {
  const [JWTToken, setJWTToken] = useState('');
  const [UploadFiles, setUploadFiles] = useState({
    Empty_Container_Scale: null,
    Empty_Container: null,
    Material_on_ground: null,
    Four_Full_container: null,
    Two_Full_container: null,
    Full_Loeded_container: null,
    One_Door_Closed: null,
    Two_Door_Closed: null,
    Loded_Scale_Photo: null,
    Seal_Photo: null,
    Truck_Ticker_form_Shipping: null,
  });

  const {id} = route.params;
  React.useEffect(() => {
    GetToken();
  }, []);

  const GetToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setJWTToken(token);
  };

  const FileUploadHandler = async () => {
    var formdata = new FormData();
    formdata.append('booking_id', id);
    formdata.append('EmptyContainerScale', UploadFiles.Empty_Container_Scale);
    formdata.append('EmptyContainer', UploadFiles.Empty_Container);
    formdata.append('MaterialOnGround', UploadFiles.Material_on_ground);
    formdata.append('1_4_FullContainer', UploadFiles.Four_Full_container);
    formdata.append('1_2_FullContainer', UploadFiles.Two_Full_container);
    formdata.append('FullLoadedContainer', UploadFiles.Full_Loeded_container);
    formdata.append('OneDoorClosed', UploadFiles.One_Door_Closed);
    formdata.append('TwoDoorClosed', UploadFiles.Two_Door_Closed);
    formdata.append('LoadedScale', UploadFiles.Loded_Scale_Photo);
    formdata.append('Seal', UploadFiles.Seal_Photo);
    formdata.append(
      'TruckTickerFromShiping',
      UploadFiles.Truck_Ticker_form_Shipping,
    );
    const Data = await MediaUpload(formdata, JWTToken);
    if (Data.success) {
      alert(Data.message);

    } else {
      alert(Data.message);
    }
  };

  const [visible, setVisible] = React.useState(false);
  const [SelectId, setSelectId] = useState('');

  const ModalPop = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={Styles.modalBackGround}>
          <Animated.View
            style={[Styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

  const ChooseFromGlary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(ImageBase => {
      setVisible(false);

      let obj = {
        ...ImageBase,
        fileName: `${SelectId}.${ImageBase.path.substring(
          ImageBase.path.lastIndexOf('.') + 1,
        )}`,
        name: `${SelectId}.${ImageBase.path.substring(
          ImageBase.path.lastIndexOf('.') + 1,
        )}`,
        size: ImageBase.size,
        type: ImageBase.mime,
        uri: ImageBase.path,
      };
      delete obj.cropRect;
      delete obj.mime;
      setUploadFiles({
        ...UploadFiles,
        [SelectId]: obj,
      });
    });
  };

  const SelectFromCamara = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 300,
      cropping: false,
    }).then(ImageBase => {
      setVisible(false);
      let obj = {
        ...ImageBase,
        fileName: `${SelectId}.${ImageBase.path.substring(
          ImageBase.path.lastIndexOf('.') + 1,
        )}`,
        name: `${SelectId}.${ImageBase.path.substring(
          ImageBase.path.lastIndexOf('.') + 1,
        )}`,
        size: ImageBase.size,
        type: ImageBase.mime,
        uri: ImageBase.path,
      };
      delete obj.cropRect;
      delete obj.mime;
      setUploadFiles({
        ...UploadFiles,
        [SelectId]: obj,
      });
    });
  };

  const renderHeaderComponent = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 60,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={goBack} style={Styles.Logout} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem('token');
            navigation.navigate('Login');
          }}>
          <Image source={Logout} style={Styles.Logout} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeadingComponent = () => {
    return (
      <View style={[Styles.Header, Styles.HeaderColor]}>
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>
          Upload Pictures
        </Text>
      </View>
    );
  };

  const List = ({name, id}) => {
    return (
      <View style={Styles.item}>
        {UploadFiles[id] == null ? (
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
              setSelectId(id);
            }}>
            <Text style={Styles.Button}>Upload</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setUploadFiles({
                ...UploadFiles,
                [id]: null,
              });
            }}>
            <Text style={Styles.Button2}>Cancel</Text>
          </TouchableOpacity>
        )}
        <Text style={Styles.itemText}>{name}</Text>
      </View>
    );
  };

  const renderListComponent = () => {
    return (
      <ScrollView contentContainerStyle={{marginVertical: 15}}>
        <List name="Empty Container Scale" id="Empty_Container_Scale" />
        <List name="Empty Container" id="Empty_Container" />
        <List name="Material on ground" id="Material_on_ground" />
        <List name="1/4 Full container" id="Four_Full_container" />
        <List name="1/2 Full container" id="Two_Full_container" />
        <List name="Full Loeded container" id="Full_Loeded_container" />
        <List name="One Door Closed" id="One_Door_Closed" />
        <List name="2 Door Closed" id="Two_Door_Closed" />
        <List name="Loded Scale Photo" id="Loded_Scale_Photo" />
        <List name="Seal Photo" id="Seal_Photo" />
        <List
          name="Truck Ticker form Shipping"
          id="Truck_Ticker_form_Shipping"
        />
      </ScrollView>
    );
  };

  const renderUploadBtnComponent = () => {
    return (
      <View style={{marginVertical: 15, marginHorizontal: 20}}>
        <TouchableOpacity
          style={Styles.UploadButton}
          onPress={() => {
            FileUploadHandler();
          }}>
          <Text style={Styles.ButtonText}>Upload Files</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderMainView = () => {
    return (
      <SafeAreaView style={Styles.container}>
        {renderHeaderComponent()}
        {renderHeadingComponent()}
        <ModalPop visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={Styles.header}>
              <Text style={Styles.ModelHeader}> Add Photo </Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={require('../../../assets/Images/x.png')}
                  style={{height: 25, width: 25}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 20, alignItems: 'flex-start'}}>
            <TouchableOpacity
              onPress={() => {
                SelectFromCamara();
              }}>
              <Text style={Styles.ModalBtn}>Take photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ChooseFromGlary();
              }}>
              <Text style={Styles.ModalBtn}>Choose from Gallery</Text>
            </TouchableOpacity>
          </View>
        </ModalPop>
        {renderListComponent()}
        {renderUploadBtnComponent()}
      </SafeAreaView>
    );
  };
  return renderMainView();
};

export default index;
