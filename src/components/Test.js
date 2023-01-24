import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

const Test = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      //  firebase realtime database
      const data = await database().ref('user/1').once('value');

      console.log(data.val());
      setUser(data.val());

      //    firestore database get user data
      //     const response = await firestore()
      //       .collection('test_app')
      //       .doc('testcabbookingapp')
      //       .get();
      //     setUser(response._data);
      //     console.log(response._data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user.name);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
    </View>
  );
};

export default Test;
