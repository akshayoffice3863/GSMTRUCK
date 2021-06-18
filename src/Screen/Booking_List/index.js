import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Styles from './style';
import Logout from '../../../assets/Images/logout.png';
import dummyData from '../../helper/Data';

const index = ({navigation}) => {
  // COMPONENT
  const renderHeaderComponent = () => {
    return (
      <View style={Styles.Header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{alignSelf: 'flex-end'}}>
          <Image source={Logout} style={Styles.Logout} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderHeadingComponent = () => {
    return (
      <View style={[Styles.Header, Styles.HeaderColor]}>
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>
          List Of Booking ID
        </Text>
      </View>
    );
  };

  const renderListComponent = () => {
    return (
      <FlatList
        style={{marginVertical: 15}}
        data={dummyData.Data}
        renderItem={({item}) => {
          return (
            <View style={Styles.item}>
              <Text style={Styles.itemText}>{item.title}</Text>
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
    );
  };

  const renderMainView = () => {
    return (
      <SafeAreaView style={Styles.container}>
        {renderHeaderComponent()}
        {renderHeadingComponent()}
        {renderListComponent()}
      </SafeAreaView>
    );
  };
  return renderMainView();
};

export default index;
