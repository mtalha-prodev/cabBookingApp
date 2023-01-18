import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import {Image} from 'react-native/Libraries/Image/Image';
import Img from './../../assets/images/cab.jpg';

const MainScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={Img} style={style.img} />
        <Text>Header</Text>
      </View>
      <View style={style.section}>
        <Text style={style.text}>
          Book your RAIDO E- Rickshaw Booking within seconds
        </Text>
        <Text style={style.textTwo}>Explore new ways to travel to Raido</Text>
      </View>
      <View style={style.footer}>
        <TouchableOpacity style={style.btn}>
          <Text style={style.btnText}>Give me a Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnTwo}>
          <Text style={style.btnTextTwo}>or ride with RAIDO E-Rickshaw </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    boxSize: 'border-box',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  section: {
    flex: 1.5,

    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  textTwo: {
    color: 'gray',
    fontSize: 20,
  },
  footer: {
    flex: 1,

    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#EE1C25',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnTwo: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextTwo: {
    color: '#EE1C25',
    fontSize: 16,
  },
});

export default MainScreen;
