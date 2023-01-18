import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import Img from './../../assets/images/cab.jpg';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={Img} style={style.img} />
        <Text>Header</Text>
      </View>
      <View style={style.section}>
        <Text style={style.text}>Welcome to Quick RAIDO Cab Booking</Text>
        <Text style={style.textTwo}>
          The fastest app to book a RAIDO E- rickshaw online near by you{' '}
        </Text>
      </View>
      <View style={style.footer}>
        <TouchableOpacity
          style={style.btn}
          onPress={() =>
            navigation.dispatch(StackActions.replace('AddNumberScreen'))
          }>
          <Text style={style.btnText}>Continue With Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnSnd}>
          <FontAwesome style={style.fontIcon} name={'facebook'} />
          <Text style={style.btnText}>login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnThird}>
          <FontAwesome style={style.fontIcon} name={'google'} />
          <Text style={style.btnText}>login with Gmail</Text>
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
    flex: 1.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  section: {
    flex: 1,

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
    marginVertical: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnSnd: {
    backgroundColor: '#1565B1',
    padding: 10,
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: 'row',
  },
  fontIcon: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  btnThird: {
    backgroundColor: '#FB5C1C',
    padding: 10,
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: 'row',
  },
  btnTextTwo: {
    color: '#EE1C25',
    fontSize: 16,
  },
});

export default LoginScreen;
