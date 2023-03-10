import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// create navigation container

// stack navigation move components
const Stack = createNativeStackNavigator();
import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import AddNumberScreen from '../screens/AddNumberScreen';
import OtpScreen from '../components/OtpScreen';
import UserPassword from '../screens/UserPassword';
import UserDetails from '../screens/UserDetails';
import Test from '../components/Test';

const StackNavigation = () => {
  const [isSplashScreen, setIsSplashScreen] = useState(true);
  //   const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
        // navigation.navigate('MainScreen');
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}
        {/* <Stack.Screen name="Test" component={Test} /> */}
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNumberScreen"
          component={AddNumberScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="UserPassword"
          component={UserPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
