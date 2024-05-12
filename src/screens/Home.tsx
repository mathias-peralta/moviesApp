import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <View>
      <AntDesign name="stepforward" size={32} color="black" />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
