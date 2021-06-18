import React, {useEffect} from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import LOGO from '../../../assets/Images/logo.png';
import Styles from "./style"
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  const renderSplashScreen = () => {
    return (
      <View
        style={Styles.LogoContainer}>
        <View>
          <Image source={LOGO} style={{resizeMode: "center"}} />
        </View>
      </View>
    );
  };

  const renderMainView = () => {
    return (
      <SafeAreaView style={Styles.container}>
        {renderSplashScreen()}
      </SafeAreaView>
    );
  };

  return renderMainView();
};

export default Splash;
