import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Dashboard } from './src/screens/Dashboard';
import { Profile } from './src/screens/Profile';

import lightTheme from './src/global/styles/light.theme';

import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_600SemiBold,
  Urbanist_500Medium,
  Urbanist_400Regular
} from '@expo-google-fonts/urbanist';
import { SplashScreen } from './src/screens/SplashScreen';
import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Urbanist_700Bold,
    Urbanist_600SemiBold,
    Urbanist_500Medium,
    Urbanist_400Regular
  });

  if (!fontsLoaded) {
    return <SplashScreen />
  }

  return (
    <ThemeProvider theme={lightTheme}>
      {/* <Dashboard /> */}
      <Routes />
    </ThemeProvider>
  );
}
