import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
