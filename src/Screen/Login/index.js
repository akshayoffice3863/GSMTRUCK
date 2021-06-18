import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Styles from './style';
import COLORS from '../../helper/color';
const index = ({navigation}) => {
  // STATE
  const [LoginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  // const [EmailValidation, setEmailValidation] = useState(true);
  // const [PasswordValidation, setPasswordValidation] = useState(true);

  // LOGIC

  const onPressHandler = () => {
    if (LoginData.email.length == 0) {
      Alert.alert('Please Enter Email');
    } else if (LoginData.password.length == 0) {
      Alert.alert('Please Enter Password');
    } else {
      navigation.navigate('Booking');
    }
  };

  //  COMPONENT
  const renderComponent = () => {
    return (
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
          {/* {!EmailValidation ? null : (
            <Text style={Styles.errorMsg}>
              Email must be 8 characters long.
            </Text>
          )} */}
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor={COLORS.GRAY}
            style={Styles.TextInput}
            onChangeText={e => {
              setLoginData({
                ...LoginData,
                password: e,
              });
            }}
          />
          {/* {!PasswordValidation ? null : (
            <Text style={Styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          )} */}
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
    );
  };

  const renderMainView = () => {
    return (
      <SafeAreaView style={Styles.container}>
        <ScrollView contentContainerStyle={{justifyContent: 'center', flex: 1}}>
          {renderComponent()}
        </ScrollView>
      </SafeAreaView>
    );
  };
  return renderMainView();
};

export default index;
