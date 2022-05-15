import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AccountScreen from './src/pages/AccountScreen';
import ListingDetailsScreen from './src/pages/ListingDetailsScreen';
import ListingEditScreen from './src/pages/ListingEditScreen'
import ListingScreen from './src/pages/ListingScreen'
import LoginScreen from './src/pages/LoginScreen'
import MessagesScreen from './src/pages/MessagesScreen'
import ViewImageScreen from './src/pages/ViewImageScreen'
import WelcomeScreen from './src/pages/WelcomeScreen'



function App() {
  return (
      <ListingEditScreen />
  );
}
export default App;
