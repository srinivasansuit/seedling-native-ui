import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const Notifications = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text>Notifications</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
