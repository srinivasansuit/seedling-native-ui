import React from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  StatusBar
} from 'react-native';


const SignUp=({navigation})=>{
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <StatusBar barStyle={'light-content'} />
    <View >
      <Text>SignUp</Text>
      <Button
        title="SignIn"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
    </SafeAreaView>
  );
}



export default SignUp;
