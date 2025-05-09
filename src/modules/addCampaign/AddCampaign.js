import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const AddCampaign = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text>AddCampaign</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddCampaign;
