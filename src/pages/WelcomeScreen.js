import React from 'react';
import {View, ImageBackground, StyleSheet, Image, Text} from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/eeee.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end', //en alta indirdik
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
