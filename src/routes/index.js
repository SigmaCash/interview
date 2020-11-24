import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from '../assets/logo.png';
import arrowBack from '../assets/arrowback.png';

import Initial from '../pages/Initial';
import PhotoList from '../pages/PhotoList';
import PhotoInfo from '../pages/PhotoInfo';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    style={{ backgroundColor: '#fff' }}
    screenOptions={{
      headerTitle: () => <Image source={logo} />,
      headerLeftContainerStyle: { marginLeft: 24 },
      headerBackImage: () => <Image source={arrowBack} />,
      headerBackTitleVisible: false,
      cardStyle: { backgroundColor: '#FFF' },
      headerTitleAlign: 'center',
    }}
  >
    <App.Screen
      name="Initial"
      component={Initial}
      options={{ headerShown: false }}
    />
    <App.Screen name="PhotoList" component={PhotoList} />
    <App.Screen name="PhotoInfo" component={PhotoInfo} />
  </App.Navigator>
);

export default AppRoutes;
