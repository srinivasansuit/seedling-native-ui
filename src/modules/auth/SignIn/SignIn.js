import React from 'react';
import {Button, Text, View, StatusBar} from 'react-native';
import SignInStyles from './SignInStyles';
import {SafeAreaView} from 'react-native';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={SignInStyles.conatiner}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text>SignIn</Text>
        <Button
          title="Home"
          onPress={() => navigation.replace('BottomTabNavigator')}
        />
        <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
