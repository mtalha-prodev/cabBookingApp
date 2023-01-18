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

const UserDetails = () => {
  const navigation = useNavigation();
  const {navigate} = navigation;

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.backArrow}
        onPress={() => navigate('UserPassword')}>
        <FontAwesome style={style.arrowIcon} name={'arrow-left'} />
      </TouchableOpacity>
      <View style={style.header}>
        <Text style={style.title}>Enter your Details</Text>
        <Text style={style.text}>
          Pleases enter the following Credentials to proceed{' '}
        </Text>
      </View>
      {/* form input fields */}
      <View style={style.form}>
        <View style={style.formText}>
          <Text style={style.textInput}>User Name</Text>
          <TextInput
            style={style.formInput}
            placeholder={'Davis John'}
            placeholderTextColor="#000"
          />
        </View>
      </View>
      <View style={style.form}>
        <View style={style.formText}>
          <Text style={style.textInput}>Conform Your Email</Text>
          <TextInput
            style={style.formInput}
            placeholder={'websitename@email.com'}
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={style.form}>
        <View style={style.formText}>
          <Text style={style.textInput}>Enter Your Password</Text>
          <TextInput
            style={style.formInput}
            placeholder={'**********'}
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={style.form}>
        <View style={style.formText}>
          <Text style={style.textInput}>Confirm Your Password</Text>
          <TextInput
            style={style.formInput}
            placeholder={'**********'}
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
        </View>
      </View>
      {/* next btn */}
      <View style={style.btnView}>
        <TouchableOpacity
          style={style.nextBtn}
          onPress={() => navigate('UserDetails')}>
          <Text style={style.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  // flex: 1,
  formText: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(238,28,37,0.5)',
    width: '100%',
  },
  textInput: {
    color: 'rgba(238,28,37,0.7)',
    fontSize: 20,
    fontWeight: 'bold',
  },
  formInput: {
    color: '#000',
    width: '100%',
    fontSize: 22,
    padding: 0,
    marginLeft: 0,
    letterSpacing: 0.2,
    paddingVertical: 5,
  },
  btnView: {
    flex: 1,
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
  nextBtn: {
    marginTop: 30,
    backgroundColor: '#EE1C25',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserDetails;
