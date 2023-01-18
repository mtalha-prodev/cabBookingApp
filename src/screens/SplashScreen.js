import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const SplashScreen = () => {
  return (
    <View style={style.containr}>
      <StatusBar hidden={true} />
      <View style={style.mapContainer}>
        <FontAwesome style={style.mapIcon} name="map-marker-alt" />
        <Text style={style.text}>RAIDO</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containr: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapIcon: {
    fontSize: 200,
    color: '#F53C44',
  },
  text: {
    position: 'absolute',
    bottom: 20,
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
