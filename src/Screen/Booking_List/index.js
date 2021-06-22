import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Styles from './style';
import Logout from '../../../assets/Images/logout.png';
import {GetAllBookings} from '../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const index = ({navigation}) => {
  const [Data, setData] = useState({});
  useEffect(() => {
    DataHandler();
  }, []);

  const DataHandler = async () => {
    const Data = await GetAllBookings();
    if (Data?.success) {
      setData(Data?.data);
    } else {
      alert(
        'Requested Records not Found... or Please Check Your Internet Conation',
      );
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.Header}>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem('token');
            navigation.navigate('Login');
          }}
          style={{alignSelf: 'flex-end'}}>
          <Image source={Logout} style={Styles.Logout} />
        </TouchableOpacity>
      </View>
      <View style={[Styles.Header, Styles.HeaderColor]}>
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>
          List Of Booking ID
        </Text>
      </View>
      {Data?.length > 0 ? (
        <FlatList
          style={{marginVertical: 15}}
          data={Data}
          renderItem={({item}) => {
            return (
              <View style={Styles.item}>
                <Text style={Styles.itemText}>{item.booking_no}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Upload', {id: item.id});
                  }}>
                  <Text style={Styles.Button}>Upload</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color="#6774df"
          style={Styles.Indicator}
        />
      )}
    </SafeAreaView>
  );
};

export default index;
