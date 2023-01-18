import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import StackNavigation from './src/navigation/StackNavigation';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App() {
  return <StackNavigation />;
}

export default App;
