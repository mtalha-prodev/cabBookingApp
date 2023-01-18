import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const OtpScreen = () => {
  const navigation = useNavigation();
  const {navigate} = navigation;

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.backArrow}
        onPress={() => navigate('AddNumberScreen')}>
        <FontAwesome style={style.arrowIcon} name={'arrow-left'} />
      </TouchableOpacity>
      <View style={style.header}>
        <Text style={style.title}>Enter OTP</Text>
        <Text style={style.text}>We sent a code to 03XXXXXXXXX </Text>
      </View>
      <View style={style.form}>
        <View style={style.formText}>
          <TextInput
            style={style.formInput}
            placeholder={'0000000'}
            placeholderTextColor="#000"
          />
        </View>
      </View>
      <View style={style.btnView}>
        <TouchableOpacity
          style={style.nextBtn}
          onPress={() => navigate('UserPassword')}>
          <Text style={style.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={style.footer}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backArrow: {
    backgroundColor: '#EE1C25',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  arrowIcon: {
    fontSize: 30,
    color: 'white',
    padding: 0,
    margin: 0,
  },
  header: {
    marginVertical: 20,
  },
  title: {
    color: '#000',
    fontSize: 40,
    marginTop: 20,
  },
  text: {
    color: 'gray',
    fontSize: 20,
  },
  form: {
    flex: 0.6,
    // marginVertical: 30,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  formText: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(238,28,37,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  formInput: {
    color: '#000',
    width: '100%',
    fontSize: 22,
    padding: 0,
    marginLeft: 0,
    letterSpacing: 1,
    paddingVertical: 5,
  },
  btnView: {
    flex: 1,
    justifyContent: 'center',
  },
  nextBtn: {
    // marginTop: 30,
    backgroundColor: '#EE1C25',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
  },
});

export default OtpScreen;
