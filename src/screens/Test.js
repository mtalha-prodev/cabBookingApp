import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const Test = () => {
  const getUser = async () => {
    try {
      const res = await firestore()
        .collection('test_app')
        .doc('testcabbookingapp')
        .get();
      console.log(res._data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
