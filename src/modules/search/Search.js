import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const Search = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text>Search</Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;
