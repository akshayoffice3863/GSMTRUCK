import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//IMPORT PATH
import Splash from "./src/Screen/SplashScreen";
import Login from "./src/Screen/Login";
import Booking from "./src/Screen/Booking_List";
import Upload from "./src/Screen/Uploder"
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Upload"
          component={Upload}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
