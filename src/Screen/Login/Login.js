import React, {useState, useEffect} from 'react';

import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Styles from './style';
import COLORS from '../../helper/color';
import {LoginAPI} from '../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  const [LoginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const onPressHandler = async () => {
    const Data = await LoginAPI(LoginData.email, LoginData.password);
    if (Data?.success) {
      await AsyncStorage.setItem('token', Data?.token);
      navigation.navigate('Booking');
    } else if (Data?.message === 'Invalid Email Address.') {
      alert('please enter valid Email.');
    } else if (Data?.message === 'Invalid Password.') {
      alert('please enter valid password.');
    } else {
      alert('Please Check Your Internet Conation');
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView contentContainerStyle={{justifyContent: 'center', flex: 1}}>
        <View style={Styles.LoginContainer}>
          <View>
            <Text style={Styles.Hading}>Verify Yourself !</Text>
          </View>
          <View>
            <TextInput
              placeholder="Enter Email ID"
              placeholderTextColor={COLORS.GRAY}
              style={Styles.TextInput}
              onChangeText={e => {
                setLoginData({
                  ...LoginData,
                  email: e,
                });
              }}
            />

            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={COLORS.GRAY}
              secureTextEntry={true}
              style={Styles.TextInput}
              onChangeText={e => {
                setLoginData({
                  ...LoginData,
                  password: e,
                });
              }}
            />
          </View>
          <View style={Styles.ButtonContainer}>
            <TouchableOpacity
              style={Styles.Button}
              onPress={() => {
                onPressHandler();
              }}>
              <Text style={Styles.ButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
