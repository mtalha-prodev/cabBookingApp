import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// create navigation container

// stack navigation move components
const Stack = createNativeStackNavigator();
import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';

const StackNavigation = () => {
  const [isSplashScreen, setIsSplashScreen] = useState(true);
  //   const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
      //   navigation.navigate('MainScreen');
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
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
