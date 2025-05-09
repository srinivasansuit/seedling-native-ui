import React from 'react';
import {Text, View, Button, StatusBar, SafeAreaView} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text>Profile</Text>
        <Button title="Logout" onPress={() => navigation.navigate('SignIn')} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
