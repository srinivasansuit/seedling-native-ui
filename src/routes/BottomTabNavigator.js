import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../modules/home/Home';
import Notifications from '../modules/notifications/Notifications';
import Profile from '../modules/profile/Profile';
import Search from '../modules/search/Search';
import AddCampaign from '../modules/addCampaign/AddCampaign';

import HomeIcon from '../assets/images/icon-home.svg';
import HomeIconFilled from '../assets/images/icon-home-active.svg';

import SearchIcon from '../assets/images/icon-search.svg';
import SearchFilled from '../assets/images/icon-search-active.svg';

import AddCampaignIcon from '../assets/images/icon-create.svg';
import AddCampaignFilled from '../assets/images/icon-create-active.svg';

import NotificationsIcon from '../assets/images/icon-notifications.svg';
import NotificationsFilled from '../assets/images/icon-notifications-active.svg';

import ProfileIcon from '../assets/images/icon-user.svg';
import ProfileFilled from '../assets/images/icon-user.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Home':
              return focused ? <HomeIconFilled /> : <HomeIcon />;
            case 'Search':
              return focused ? <SearchFilled /> : <SearchIcon />;
            case 'AddCampaign':
              return focused ? <AddCampaignFilled /> : <AddCampaignIcon />;
            case 'Notifications':
              return focused ? <NotificationsFilled /> : <NotificationsIcon />;
            case 'Profile':
              return focused ? <ProfileFilled /> : <ProfileIcon />;
          }
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="AddCampaign" component={AddCampaign} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
