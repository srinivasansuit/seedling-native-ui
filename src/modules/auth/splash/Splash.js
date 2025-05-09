import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashStyles from './SplashStyles';

const Splash = ({navigation}) => {

  //setTimer to direct the screen for splash to Home
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('BottomTabNavigator');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup
  }, [navigation]);

  return (
    <View style={SplashStyles.conatiner}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
