import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'home'>('login');

  const navigateToHome = () => setCurrentScreen('home');
  const navigateToLogin = () => setCurrentScreen('login');

  return (
    <View style={styles.container}>
      {currentScreen === 'login' ? (
        <LoginScreen navigation={{ navigate: navigateToHome }} />
      ) : (
        <HomeScreen navigation={{ navigate: navigateToLogin }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 